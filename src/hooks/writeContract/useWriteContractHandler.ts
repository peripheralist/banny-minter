import { MutateOptions } from "@tanstack/react-query";
import { WriteContractErrorType } from "@wagmi/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { Abi, ContractFunctionArgs, ContractFunctionName } from "viem";
import { useTransactionReceipt, useWriteContract } from "wagmi";
import { WriteContractData, WriteContractVariables } from "wagmi/query";
import { config } from "../../../config.wagmi";
import { AlertContext } from "@/contexts/alertContext";

type _Config = typeof config;

/**
 * Standardized handler for all useWriteContract instances
 */
export function useWriteContractHandler<
  const abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, "nonpayable" | "payable">,
  args extends ContractFunctionArgs<
    abi,
    "nonpayable" | "payable",
    functionName
  >,
  chainId extends _Config["chains"][number]["id"],
  variables extends WriteContractVariables<
    abi,
    functionName,
    args,
    _Config,
    chainId,
    // use `functionName` to make sure it's not union of all possible function names
    functionName
  >,
  meta extends unknown
>(
  variables: Omit<variables, "args"> & { args: args | ((x: meta) => args) },
  options?: MutateOptions<WriteContractData, WriteContractErrorType, variables>
) {
  const [usedVariables, setUsedVariables] = useState<variables>();

  const {
    writeContract,
    data: hash,
    isPending,
    ...data
  } = useWriteContract<_Config>();

  const { setAlert } = useContext(AlertContext);

  const write = useCallback(
    (a: meta) => {
      const { args } = variables;

      const v = {
        ...variables,
        args: Array.isArray(args) ? args : (args as (x: meta) => args)(a),
      } as variables;

      setUsedVariables(v);

      writeContract<abi, functionName, args, chainId>(
        v,
        options as any // TODO will fix im sorry
      );
    },
    [variables, options, writeContract]
  );

  const tx = useTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (data.error) {
      console.warn("Transaction error:", data.error);
      setAlert?.(data.error.message);
      return;
    }

    switch (tx.status) {
      case "success":
        if (hash && usedVariables) {
          options?.onSuccess?.(hash, usedVariables, undefined);
        }
        break;
      case "error":
        if (tx.error.name !== "TransactionReceiptNotFoundError") {
          // TODO seems silly...
          setAlert?.("Something may have gone wrong...");
        }
        break;
    }
  }, [
    tx.status,
    tx.error?.name,
    setAlert,
    options,
    usedVariables,
    hash,
    data.error,
  ]);

  return { write, isPending: isPending || tx.isLoading, data };
}

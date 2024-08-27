import { AlertContext } from "@/contexts/alertContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Abi, ContractFunctionArgs, ContractFunctionName } from "viem";
import { useTransactionReceipt, useWriteContract } from "wagmi";
import { WriteContractVariables } from "wagmi/query";
import { config } from "../../../config.wagmi";

export type WriteContractHandlerOptions<args = unknown> = {
  onSuccess?: (v: args) => void;
  onError?: (v: args) => void;
};

// export type WriteContractHandlerOptions<variables = unknown> = MutateOptions<
//   WriteContractData,
//   WriteContractErrorType,
//   variables
// >;

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
  options?: WriteContractHandlerOptions<args>
) {
  const [usedArgs, setUsedArgs] = useState<args>();

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

      const _args = Array.isArray(args) ? args : (args as (x: meta) => args)(a);

      const v = {
        ...variables,
        args: _args,
      } as variables;

      setUsedArgs(_args);

      writeContract<abi, functionName, args, chainId>(v, undefined);
    },
    [variables, options, writeContract]
  );

  const tx = useTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (data.error) {
      console.warn("Transaction error:", data.error);

      if (usedArgs && options?.onError) {
        options.onError(usedArgs);
      } else {
        setAlert?.({ title: "Error :(", body: data.error.message });
      }
      return;
    }

    switch (tx.status) {
      case "success":
        if (usedArgs) options?.onSuccess?.(usedArgs);

        break;
      case "error":
        if (
          // TODO seems silly...
          tx.error.name !== "TransactionReceiptNotFoundError"
        ) {
          setAlert?.({ body: "Something may have gone wrong..." });
        }
        break;
    }
  }, [
    tx.status,
    tx.error?.name,
    setAlert,
    options?.onSuccess,
    options?.onError,
    usedArgs,
    hash,
    data.error?.message,
  ]);

  return { write, isPending: isPending || tx.isLoading, data, usedArgs };
}

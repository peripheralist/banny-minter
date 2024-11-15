import { AlertContext } from "@/contexts/alertContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Abi, ContractFunctionArgs, ContractFunctionName } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
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
  const [isComplete, setIsComplete] = useState(false);
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
      setIsComplete(false);

      const { args } = variables;

      const _args = Array.isArray(args) ? args : (args as (x: meta) => args)(a);

      const v = {
        ...variables,
        args: _args,
      } as variables;

      setUsedArgs(_args);

      writeContract<abi, functionName, args, chainId>(v, undefined);
    },
    [variables, writeContract]
  );

  const tx = useWaitForTransactionReceipt({
    hash,
    pollingInterval: 1000,
    retryCount: 3,
    retryDelay: 5000,
  });

  useEffect(() => {
    if (isComplete) return;

    if (data.error) {
      console.warn("Transaction error:", data.error);

      if (usedArgs && options?.onError) {
        options.onError(usedArgs);
      } else {
        setAlert?.({ title: "Error :(", body: data.error.message });
      }

      setIsComplete(true);
      return;
    }

    switch (tx.status) {
      case "success":
        if (usedArgs) options?.onSuccess?.(usedArgs);

        setIsComplete(true);

        break;
      case "error":
        if (
          // TODO seems silly...
          tx.error.name !== "TransactionReceiptNotFoundError"
        ) {
          setAlert?.({ body: "Something may have gone wrong..." });
          setIsComplete(true);
        }

        break;
    }
  }, [
    tx.status,
    tx.error?.name,
    data.error,
    setAlert,
    options,
    usedArgs,
    hash,
    isComplete,
  ]);

  console.log("asdf tx", isPending, tx.status, tx.error);

  return { write, isPending: isPending || tx.isLoading, data, usedArgs };
}

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { CalculatorType } from "@/@types";
import { CALC_TYPES } from "@/constants";

interface CalculatorContextProps {
  type: CalculatorType;
  handleType(param: CalculatorType): void;
  display: string;
  setDisplay: Dispatch<SetStateAction<string>>;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);

export const useCalculator = () => useContext(CalculatorContext);

export function CalculatorProvider(props: PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlParams = new URLSearchParams();

  const [display, setDisplay] = useState("");

  const type = checkType(searchParams.get("type"));

  useEffect(() => {
    handleType(type);
  }, [type]);

  function checkType(type: string | null) {
    return type === "null" || !Object.values(CALC_TYPES).includes(type as string | CalculatorType)
      ? "default"
      : type as CalculatorType;
  }

  const handleType = useCallback(
    (param: CalculatorType) => {
      setDisplay('');

      urlParams.set("type", String(param));
      router.push(`${pathname}?${urlParams.toString()}`);
    },
    []
  );

  const value = useMemo(() => ({
    type,
    handleType,
    display,
    setDisplay
  }), [type, display]);

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
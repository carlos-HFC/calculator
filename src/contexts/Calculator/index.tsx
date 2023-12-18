"use client";

import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from "react";

import { CalculatorType } from "@/@types";

interface CalculatorContextProps {
  type: CalculatorType;
  handleType(param: CalculatorType): void;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);

export const useCalculator = () => useContext(CalculatorContext);

export function CalculatorProvider(props: PropsWithChildren) {
  const [type, setType] = useState<CalculatorType>("default");

  const handleType = useCallback(
    (param: CalculatorType) => {
      setType(param);
    },
    []
  );

  const value = useMemo(() => ({
    type,
    handleType
  }), [type]);

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
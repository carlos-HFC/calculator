"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useContext, useMemo, useState } from "react";

import { CalculatorType } from "@/@types";

interface CalculatorContextProps {
  type: CalculatorType;
  handleType(param: CalculatorType): void;
  display: string;
  setDisplay: Dispatch<SetStateAction<string>>;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);

export const useCalculator = () => useContext(CalculatorContext);

export function CalculatorProvider(props: PropsWithChildren) {
  const [type, setType] = useState<CalculatorType>("default");
  const [display, setDisplay] = useState("0");

  const handleType = useCallback(
    (param: CalculatorType) => {
      setDisplay('0');
      setType(param);
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
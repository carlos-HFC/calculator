import { ReactNode } from "react";

export type CalculatorType = "default" | "science" | "temperature";

export type MenuItems = {
  label: string;
  value: CalculatorType;
  icon: ReactNode;
};
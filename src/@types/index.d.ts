import { ReactNode } from "react";

export type CalculatorType = "default" | "science" | "temperature";

export type MenuItems = {
  label: string;
  value: CalculatorType;
  icon: ReactNode;
};

export type TemperatureType = "celsius" | "fahrenheit" | "kelvin";
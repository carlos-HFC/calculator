import { ReactNode } from "react";

export type CalculatorType = "default" | "science" | "temperature" | "speed";

export type MenuItems = {
  label: string;
  value: CalculatorType;
  icon: ReactNode;
};

export type TemperatureType = "celsius" | "fahrenheit" | "kelvin";

export type ConvertMeasureParams<T, K = undefined> = {
  [P in K]: T
} & {
  value: number;
  from: T;
};

export type ChooseConversion<T> = {
  from: T;
  to: T;
};

export type SpeedType = "meter-seconds" | "km-hour" | "miles-hour" | "knos" | "mach";
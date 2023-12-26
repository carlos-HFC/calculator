import { ReactNode } from "react";

export type CalculatorType = "default" | "science" | "temperature" | "speed" | "length" | "weight" | "volume";

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

export type SpeedType = "meters-second" | "km-hour" | "miles-hour" | "knos" | "mach";

export type LengthType = "nanometer" | "micrometer" | "millimeter" | "centimeter" | "meter" | "kilometer" | "mile" | "yard" | "foot" | "inch";

export type WeightType = "carat" | "milligram" | "gram" | "kilogram" | "ounce" | "pound" | "ton";

export type VolumeType = "milliliter" | "cubic-centimeter" | "liter" | "cubic-meter";
import { ReactNode } from "react";

export type CalculatorType = "default" | "science" | "temperature" | "speed" | "length" | "weight" | "volume" | "area" | "power" | "pressure" | "energy" | "frequency" | "time" | "number"|"data";

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

export type AreaType = "square-mile" | "acre" | "square-kilometer" | "square-meter" | "square-centimeter" | "square-millimeter" | "hectare";

export type PowerType = "watt" | "kilowatt" | "horsepower" | "kilocalorie";

export type PressureType = "pascal" | "atmosphere" | "bar" | "kg-per-meter";

export type EnergyType = "joule" | "kilojoule" | "megajoule" | "calorie" | "kilocalorie" | "kilowatt-hour" | "electronvolt";

export type FrequencyType = "hertz" | "kilohertz" | "megahertz" | "gigahertz" | "rpm";

export type TimeType = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";

export type NumberType = "binary" | "decimal" | "octal" | "hexadecimal";

export type DataType = "bit" | "byte" | "kilobyte" | "megabyte" | "gigabyte" | "terabyte";
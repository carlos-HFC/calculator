import { TemperatureType } from "@/@types";

export function factorialize(value: number): number {
  if (value < 0) return -1;
  if (value === 0) return 1;

  return (value * factorialize(value - 1));
}

export function termialize(value: number): number {
  return (value * (value + 1)) / 2;
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface ConvertTemperatureParams {
  value: number;
  from: TemperatureType;
}
export function convertTemperature({ value, from }: ConvertTemperatureParams) {
  switch (from) {
    case "celsius":
      return {
        celsius: `${(value).toFixed(2)} ºC`,
        fahrenheit: `${((value * (9 / 5)) + 32).toFixed(2)} ºF`,
        kelvin: `${(value + 273.15).toFixed(2)} K`,
      };
    case "fahrenheit":
      return {
        celsius: `${((value - 32) * (5 / 9)).toFixed(2)} ºC`,
        fahrenheit: `${(value).toFixed(2)} ºF`,
        kelvin: `${((value - 32) * (5 / 9) + 273.15).toFixed(2)} K`,
      };
    case "kelvin":
      return {
        celsius: `${(value - 237.15).toFixed(2)} ºC`,
        fahrenheit: `${((value - 273.15) * (9 / 5) + 32).toFixed(2)} ºF`,
        kelvin: `${(value).toFixed(2)} K`,
      };
  }
}
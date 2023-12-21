import { ConvertMeasureParams, SpeedType, TemperatureType } from "@/@types";

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

export function convertTemperature({ value, from }: ConvertMeasureParams<TemperatureType>) {
  switch (from) {
    case "celsius":
      return {
        celsius: `${parseFloat((value).toFixed(2))} ºC`,
        fahrenheit: `${parseFloat(((value * (9 / 5)) + 32).toFixed(2))} ºF`,
        kelvin: `${parseFloat((value + 273.15).toFixed(2))} K`,
      };
    case "fahrenheit":
      return {
        celsius: `${parseFloat(((value - 32) * (5 / 9)).toFixed(2))} ºC`,
        fahrenheit: `${parseFloat((value).toFixed(2))} ºF`,
        kelvin: `${parseFloat(((value - 32) * (5 / 9) + 273.15).toFixed(2))} K`,
      };
    case "kelvin":
      return {
        celsius: `${parseFloat((value - 237.15).toFixed(2))} ºC`,
        fahrenheit: `${parseFloat(((value - 273.15) * (9 / 5) + 32).toFixed(2))} ºF`,
        kelvin: `${parseFloat((value).toFixed(2))} K`,
      };
  }
}

export function convertSpeed({ value, from, to }: ConvertMeasureParams<SpeedType, 'to'>) {
  switch (from) {
    case "meter-seconds":
      if (to === 'meter-seconds') return `${parseFloat((value).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 3.6).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 2.24).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 1.94).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.00292).toFixed(4))} M`;
    case "km-hour":
      if (to === 'km-hour') return `${parseFloat((value).toFixed(4))} Km/h`;
      if (to === 'meter-seconds') return `${parseFloat((value * 0.27).toFixed(4))} m/s`;
      if (to === 'miles-hour') return `${parseFloat((value * 0.62).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 0.54).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.00081).toFixed(4))} M`;
    case "miles-hour":
      if (to === 'miles-hour') return `${parseFloat((value).toFixed(4))} mph`;
      if (to === 'meter-seconds') return `${parseFloat((value * 0.00045).toFixed(3))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1.61).toFixed(4))} Km/h`;
      if (to === 'knos') return `${parseFloat((value * 0.87).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.0013).toFixed(4))} M`;
    case "knos":
      if (to === 'knos') return `${parseFloat((value).toFixed(4))} kn`;
      if (to === 'meter-seconds') return `${parseFloat((value * 0.51).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1.86).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 1.15).toFixed(4))} mph`;
      if (to === 'mach') return `${parseFloat((value * 0.0015).toFixed(4))} M`;
    case "mach":
      if (to === 'mach') return `${parseFloat((value).toFixed(4))} M`;
      if (to === 'meter-seconds') return `${parseFloat((value * 343).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1234.8).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 767.27).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 666.74).toFixed(4))} kn`;
  }
}
import { ConvertMeasureParams, LengthType, SpeedType, TemperatureType } from "@/@types";

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
    case "meters-second":
      if (to === 'meters-second') return `${parseFloat((value).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 3.6).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 2.24).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 1.94).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.00292).toFixed(4))} M`;
    case "km-hour":
      if (to === 'km-hour') return `${parseFloat((value).toFixed(4))} Km/h`;
      if (to === 'meters-second') return `${parseFloat((value * 0.27).toFixed(4))} m/s`;
      if (to === 'miles-hour') return `${parseFloat((value * 0.62).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 0.54).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.00081).toFixed(4))} M`;
    case "miles-hour":
      if (to === 'miles-hour') return `${parseFloat((value).toFixed(4))} mph`;
      if (to === 'meters-second') return `${parseFloat((value * 0.00045).toFixed(3))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1.61).toFixed(4))} Km/h`;
      if (to === 'knos') return `${parseFloat((value * 0.87).toFixed(4))} kn`;
      if (to === 'mach') return `${parseFloat((value * 0.0013).toFixed(4))} M`;
    case "knos":
      if (to === 'knos') return `${parseFloat((value).toFixed(4))} kn`;
      if (to === 'meters-second') return `${parseFloat((value * 0.51).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1.86).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 1.15).toFixed(4))} mph`;
      if (to === 'mach') return `${parseFloat((value * 0.0015).toFixed(4))} M`;
    case "mach":
      if (to === 'mach') return `${parseFloat((value).toFixed(4))} M`;
      if (to === 'meters-second') return `${parseFloat((value * 343).toFixed(4))} m/s`;
      if (to === 'km-hour') return `${parseFloat((value * 1234.8).toFixed(4))} Km/h`;
      if (to === 'miles-hour') return `${parseFloat((value * 767.27).toFixed(4))} mph`;
      if (to === 'knos') return `${parseFloat((value * 666.74).toFixed(4))} kn`;
  }
}

export function convertLength({ value, from, to }: ConvertMeasureParams<LengthType, 'to'>) {
  switch (from) {
    case "milimeter":
      if (to === 'milimeter') return `${parseFloat((value).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 0.1).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 0.001).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.000001).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.00000062137).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 0.001094).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 0.003281).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 0.03937).toFixed(6))} in`;
    case "centimeter":
      if (to === 'milimeter') return `${parseFloat((value * 10).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 0.01).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.00001).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.0000062137).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 0.010936).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 0.032808).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 0.393701).toFixed(6))} in`;
    case "meter":
      if (to === 'milimeter') return `${parseFloat((value * 1000).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 100).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.001).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.000621).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 1.093613).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 3.28084).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 39.370079).toFixed(6))} in`;
    case "kilometer":
      if (to === 'milimeter') return `${parseFloat((value * 1000000).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 100000).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 1000).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.0621371).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 1094).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 3281).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 39370).toFixed(6))} in`;
    case "mile":
      if (to === 'milimeter') return `${parseFloat((value * 1609344).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 160934).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 1609).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 1.609344).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 1760).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 5280).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 63360).toFixed(6))} in`;
    case "yard":
      if (to === 'milimeter') return `${parseFloat((value * 914.4).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 91.44).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 0.9144).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.000914).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.000568).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 3).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 36).toFixed(6))} in`;
    case "foot":
      if (to === 'milimeter') return `${parseFloat((value * 304.8).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 30.48).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 0.3048).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.000305).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.000189).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 0.333333).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value * 12).toFixed(6))} in`;
    case "inch":
      if (to === 'milimeter') return `${parseFloat((value * 25.4).toFixed(6))} mm`;
      if (to === 'centimeter') return `${parseFloat((value * 2.54).toFixed(6))} cm`;
      if (to === 'meter') return `${parseFloat((value * 0.0254).toFixed(6))} m`;
      if (to === 'kilometer') return `${parseFloat((value * 0.0000254).toFixed(6))} km`;
      if (to === 'mile') return `${parseFloat((value * 0.000015783).toFixed(6))} mi`;
      if (to === 'yard') return `${parseFloat((value * 0.027778).toFixed(6))} yd`;
      if (to === 'foot') return `${parseFloat((value * 0.083333).toFixed(6))} ft`;
      if (to === 'inch') return `${parseFloat((value).toFixed(6))} in`;
  }
}
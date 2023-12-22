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
    case "nanometer":
      if (to === 'nanometer') return `${value} nm`;
      if (to === 'micrometer') return `${value * 0.001} µm`;
      if (to === 'millimeter') return `${value * 0.000001} mm`;
      if (to === 'centimeter') return `${value * 0.0000001} cm`;
      if (to === 'meter') return `${value * 0.000000001} m`;
      if (to === 'kilometer') return `${value * 0.000000000001} km`;
      if (to === 'mile') return `${value * 0.00000000000062137} mi`;
      if (to === 'yard') return `${value * 0.0000000010936} yd`;
      if (to === 'foot') return `${value * 0.0000000032808} ft`;
      if (to === 'inch') return `${value * 0.00000003937} in`;
    case "micrometer":
      if (to === 'nanometer') return `${value * 1000} nm`;
      if (to === 'micrometer') return `${value} µm`;
      if (to === 'millimeter') return `${value * 0.001} mm`;
      if (to === 'centimeter') return `${value * 0.0001} cm`;
      if (to === 'meter') return `${value * 0.000001} m`;
      if (to === 'kilometer') return `${value * 0.000000001} km`;
      if (to === 'mile') return `${value * 0.00000000062137} mi`;
      if (to === 'yard') return `${value * 0.0000010936} yd`;
      if (to === 'foot') return `${value * 0.0000032808} ft`;
      if (to === 'inch') return `${value * 0.00003937} in`;
    case "millimeter":
      if (to === 'nanometer') return `${value * 1000000} nm`;
      if (to === 'micrometer') return `${value * 1000} µm`;
      if (to === 'millimeter') return `${value} mm`;
      if (to === 'centimeter') return `${value * 0.1} cm`;
      if (to === 'meter') return `${value * 0.001} m`;
      if (to === 'kilometer') return `${value * 0.000001} km`;
      if (to === 'mile') return `${value * 0.00000062137} mi`;
      if (to === 'yard') return `${value * 0.001094} yd`;
      if (to === 'foot') return `${value * 0.003281} ft`;
      if (to === 'inch') return `${value * 0.03937} in`;
    case "centimeter":
      if (to === 'nanometer') return `${value * 10000000} nm`;
      if (to === 'micrometer') return `${value * 10000} µm`;
      if (to === 'millimeter') return `${value * 10} mm`;
      if (to === 'centimeter') return `${value} cm`;
      if (to === 'meter') return `${value * 0.01} m`;
      if (to === 'kilometer') return `${value * 0.00001} km`;
      if (to === 'mile') return `${value * 0.0000062137} mi`;
      if (to === 'yard') return `${value * 0.010936} yd`;
      if (to === 'foot') return `${value * 0.032808} ft`;
      if (to === 'inch') return `${value * 0.393701} in`;
    case "meter":
      if (to === 'nanometer') return `${value * 1000000000} nm`;
      if (to === 'micrometer') return `${value * 10000} µm`;
      if (to === 'millimeter') return `${value * 1000} mm`;
      if (to === 'centimeter') return `${value * 100} cm`;
      if (to === 'meter') return `${value} m`;
      if (to === 'kilometer') return `${value * 0.001} km`;
      if (to === 'mile') return `${value * 0.000621} mi`;
      if (to === 'yard') return `${value * 1.093613} yd`;
      if (to === 'foot') return `${value * 3.28084} ft`;
      if (to === 'inch') return `${value * 39.370079} in`;
    case "kilometer":
      if (to === 'nanometer') return `${value * 1000000000000} nm`;
      if (to === 'micrometer') return `${value * 1000000000} µm`;
      if (to === 'millimeter') return `${value * 1000000} mm`;
      if (to === 'centimeter') return `${value * 100000} cm`;
      if (to === 'meter') return `${value * 1000} m`;
      if (to === 'kilometer') return `${value} km`;
      if (to === 'mile') return `${value * 0.0621371} mi`;
      if (to === 'yard') return `${value * 1094} yd`;
      if (to === 'foot') return `${value * 3281} ft`;
      if (to === 'inch') return `${value * 39370} in`;
    case "mile":
      if (to === 'nanometer') return `${value * 1609344000000} nm`;
      if (to === 'micrometer') return `${value * 1609344000} µm`;
      if (to === 'millimeter') return `${value * 1609344} mm`;
      if (to === 'centimeter') return `${value * 160934} cm`;
      if (to === 'meter') return `${value * 1609} m`;
      if (to === 'kilometer') return `${value * 1.609344} km`;
      if (to === 'mile') return `${value} mi`;
      if (to === 'yard') return `${value * 1760} yd`;
      if (to === 'foot') return `${value * 5280} ft`;
      if (to === 'inch') return `${value * 63360} in`;
    case "yard":
      if (to === 'nanometer') return `${value * 914400000} nm`;
      if (to === 'micrometer') return `${value * 914400} µm`;
      if (to === 'millimeter') return `${value * 914.4} mm`;
      if (to === 'centimeter') return `${value * 91.44} cm`;
      if (to === 'meter') return `${value * 0.9144} m`;
      if (to === 'kilometer') return `${value * 0.000914} km`;
      if (to === 'mile') return `${value * 0.000568} mi`;
      if (to === 'yard') return `${value} yd`;
      if (to === 'foot') return `${value * 3} ft`;
      if (to === 'inch') return `${value * 36} in`;
    case "foot":
      if (to === 'nanometer') return `${value * 304800000} nm`;
      if (to === 'micrometer') return `${value * 304800} µm`;
      if (to === 'millimeter') return `${value * 304.8} mm`;
      if (to === 'centimeter') return `${value * 30.48} cm`;
      if (to === 'meter') return `${value * 0.3048} m`;
      if (to === 'kilometer') return `${value * 0.000305} km`;
      if (to === 'mile') return `${value * 0.000189} mi`;
      if (to === 'yard') return `${value * 0.333333} yd`;
      if (to === 'foot') return `${value} ft`;
      if (to === 'inch') return `${value * 12} in`;
    case "inch":
      if (to === 'nanometer') return `${value * 25400000} nm`;
      if (to === 'micrometer') return `${value * 25400} µm`;
      if (to === 'millimeter') return `${value * 25.4} mm`;
      if (to === 'centimeter') return `${value * 2.54} cm`;
      if (to === 'meter') return `${value * 0.0254} m`;
      if (to === 'kilometer') return `${value * 0.0000254} km`;
      if (to === 'mile') return `${value * 0.000015783} mi`;
      if (to === 'yard') return `${value * 0.027778} yd`;
      if (to === 'foot') return `${value * 0.083333} ft`;
      if (to === 'inch') return `${value} in`;
  }
}
import { AreaType, ConvertMeasureParams, EnergyType, FrequencyType, LengthType, PowerType, PressureType, SpeedType, TemperatureType, TimeType, VolumeType, WeightType } from "@/@types";

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

export function convertTemperature({ value, from, to }: ConvertMeasureParams<TemperatureType, 'to'>) {
  switch (from) {
    case "celsius":
      if (to === 'celsius') return `${parseFloat((value).toFixed(2))} ºC`;
      if (to === 'fahrenheit') return `${parseFloat(((value * (9 / 5)) + 32).toFixed(2))} ºF`;
      if (to === 'kelvin') return `${parseFloat((value + 273.15).toFixed(2))} K`;
    case "fahrenheit":
      if (to === 'celsius') return `${parseFloat(((value - 32) * (5 / 9)).toFixed(2))} ºC`;
      if (to === 'fahrenheit') return `${parseFloat((value).toFixed(2))} ºF`;
      if (to === 'kelvin') return `${parseFloat(((value - 32) * (5 / 9) + 273.15).toFixed(2))} K`;
    case "kelvin":
      if (to === 'celsius') return `${parseFloat((value - 237.15).toFixed(2))} ºC`;
      if (to === 'fahrenheit') return `${parseFloat(((value - 273.15) * (9 / 5) + 32).toFixed(2))} ºF`;
      if (to === 'kelvin') return `${parseFloat((value).toFixed(2))} K`;
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

export function convertWeight({ value, from, to }: ConvertMeasureParams<WeightType, 'to'>) {
  switch (from) {
    case "carat":
      if (to === 'carat') return `${value} ct`;
      if (to === 'milligram') return `${value * 200} mg`;
      if (to === 'gram') return `${value * 0.2} g`;
      if (to === 'kilogram') return `${value * 0.0002} kg`;
      if (to === 'ounce') return `${value * 0.007055} oz`;
      if (to === 'pound') return `${value * 0.000441} lbs`;
      if (to === 'ton') return `${value * 0.0000002} t`;
    case "milligram":
      if (to === 'carat') return `${value * 0.005} ct`;
      if (to === 'milligram') return `${value} mg`;
      if (to === 'gram') return `${value * 0.001} g`;
      if (to === 'kilogram') return `${value * 0.000001} kg`;
      if (to === 'ounce') return `${value * 0.000035274} oz`;
      if (to === 'pound') return `${value * 0.0000022046} lbs`;
      if (to === 'ton') return `${value * 0.000000001} t`;
    case "gram":
      if (to === 'carat') return `${value * 5} ct`;
      if (to === 'milligram') return `${value * 1000} mg`;
      if (to === 'gram') return `${value} g`;
      if (to === 'kilogram') return `${value * 0.001} kg`;
      if (to === 'ounce') return `${value * 0.035274} oz`;
      if (to === 'pound') return `${value * 0.002205} lbs`;
      if (to === 'ton') return `${value * 0.000001} t`;
    case "kilogram":
      if (to === 'carat') return `${value * 5000} ct`;
      if (to === 'milligram') return `${value * 1000000} mg`;
      if (to === 'gram') return `${value * 1000} g`;
      if (to === 'kilogram') return `${value} kg`;
      if (to === 'ounce') return `${value * 35.273962} oz`;
      if (to === 'pound') return `${value * 2.204623} lbs`;
      if (to === 'ton') return `${value * 0.001} t`;
    case "ounce":
      if (to === 'carat') return `${value * 141.747616} ct`;
      if (to === 'milligram') return `${value * 28350} mg`;
      if (to === 'gram') return `${value * 28.349523} g`;
      if (to === 'kilogram') return `${value * 0.02835} kg`;
      if (to === 'ounce') return `${value} oz`;
      if (to === 'pound') return `${value * 0.0625} lbs`;
      if (to === 'ton') return `${value * 0.00002835} t`;
    case "pound":
      if (to === 'carat') return `${value * 2268} ct`;
      if (to === 'milligram') return `${value * 453592} mg`;
      if (to === 'gram') return `${value * 453.59237} g`;
      if (to === 'kilogram') return `${value * 0.453592} kg`;
      if (to === 'ounce') return `${value * 16} oz`;
      if (to === 'pound') return `${value} lbs`;
      if (to === 'ton') return `${value * 0.000454} t`;
    case "ton":
      if (to === 'carat') return `${value * 5000000} ct`;
      if (to === 'milligram') return `${value * 1000000000} mg`;
      if (to === 'gram') return `${value * 1000000} g`;
      if (to === 'kilogram') return `${value * 1000} kg`;
      if (to === 'ounce') return `${value * 35274} oz`;
      if (to === 'pound') return `${value * 2205} lbs`;
      if (to === 'ton') return `${value} t`;
  }
}

export function convertVolume({ value, from, to }: ConvertMeasureParams<VolumeType, 'to'>) {
  switch (from) {
    case "milliliter":
    case "cubic-centimeter":
      if (to === 'milliliter') return `${value} mL`;
      if (to === 'cubic-centimeter') return `${value} cm³`;
      if (to === 'liter') return `${value * 0.001} L`;
      if (to === 'cubic-meter') return `${value * 0.000001} m³`;
    case "liter":
      if (to === 'milliliter') return `${value * 1000} mL`;
      if (to === 'cubic-centimeter') return `${value * 1000} cm³`;
      if (to === 'liter') return `${value} L`;
      if (to === 'cubic-meter') return `${value * 0.001} m³`;
    case "cubic-meter":
      if (to === 'milliliter') return `${value * 1000000} mL`;
      if (to === 'cubic-centimeter') return `${value * 1000000} cm³`;
      if (to === 'liter') return `${value * 1000} L`;
      if (to === 'cubic-meter') return `${value} m³`;
  }
}

export function convertArea({ value, from, to }: ConvertMeasureParams<AreaType, 'to'>) {
  switch (from) {
    case "square-mile":
      if (to === 'square-mile') return `${value} mi²`;
      if (to === 'acre') return `${value * 640} ac`;
      if (to === 'square-kilometer') return `${value * 2.589988} km²`;
      if (to === 'square-meter') return `${value * 2589988} m²`;
      if (to === 'square-centimeter') return `${value * 25899881100} cm²`;
      if (to === 'square-millimeter') return `${value * 2589988110000} mm²`;
      if (to === 'hectare') return `${value * 258.998811} ha`;
    case "acre":
      if (to === 'square-mile') return `${value * 0.001563} mi²`;
      if (to === 'acre') return `${value} ac`;
      if (to === 'square-kilometer') return `${value * 0.004047} km²`;
      if (to === 'square-meter') return `${value * 4047} m²`;
      if (to === 'square-centimeter') return `${value * 40468564} cm²`;
      if (to === 'square-millimeter') return `${value * 4046856422} mm²`;
      if (to === 'hectare') return `${value * 0.404686} ha`;
    case "square-kilometer":
      if (to === 'square-mile') return `${value * 0.386102} mi²`;
      if (to === 'acre') return `${value * 247.105381} ac`;
      if (to === 'square-kilometer') return `${value} km²`;
      if (to === 'square-meter') return `${value * 1000000} m²`;
      if (to === 'square-centimeter') return `${value * 10000000000} cm²`;
      if (to === 'square-millimeter') return `${value * 1000000000000} mm²`;
      if (to === 'hectare') return `${value * 100} ha`;
    case "square-meter":
      if (to === 'square-mile') return `${value * 0.0000003861} mi²`;
      if (to === 'acre') return `${value * 0.000247} ac`;
      if (to === 'square-kilometer') return `${value * 0.000001} km²`;
      if (to === 'square-meter') return `${value} m²`;
      if (to === 'square-centimeter') return `${value * 10000} cm²`;
      if (to === 'square-millimeter') return `${value * 1000000} mm²`;
      if (to === 'hectare') return `${value * 0.0001} ha`;
    case "square-centimeter":
      if (to === 'square-mile') return `${value * 0.00000000003861} mi²`;
      if (to === 'acre') return `${value * 0.000000024711} ac`;
      if (to === 'square-kilometer') return `${value * 0.0000000001} km²`;
      if (to === 'square-meter') return `${value * 0.0001} m²`;
      if (to === 'square-centimeter') return `${value} cm²`;
      if (to === 'square-millimeter') return `${value * 100} mm²`;
      if (to === 'hectare') return `${value * 0.00000001} ha`;
    case "square-millimeter":
      if (to === 'square-mile') return `${value * 0.0000000000003861} mi²`;
      if (to === 'acre') return `${value * 0.00000000024711} ac`;
      if (to === 'square-kilometer') return `${value * 0.000000000001} km²`;
      if (to === 'square-meter') return `${value * 0.000001} m²`;
      if (to === 'square-centimeter') return `${value * 0.01} cm²`;
      if (to === 'square-millimeter') return `${value} mm²`;
      if (to === 'hectare') return `${value * 0.0000000001} ha`;
    case "hectare":
      if (to === 'square-mile') return `${value * 0.003861} mi²`;
      if (to === 'acre') return `${value * 2.471054} ac`;
      if (to === 'square-kilometer') return `${value * 0.01} km²`;
      if (to === 'square-meter') return `${value * 10000} m²`;
      if (to === 'square-centimeter') return `${value * 100000000} cm²`;
      if (to === 'square-millimeter') return `${value * 10000000000} mm²`;
      if (to === 'hectare') return `${value} ha`;
  }
}

export function convertPower({ value, from, to }: ConvertMeasureParams<PowerType, 'to'>) {
  switch (from) {
    case "watt":
      if (to === 'watt') return `${value} W`;
      if (to === 'kilowatt') return `${value * 0.001} kW`;
      if (to === 'horsepower') return `${value * 0.001341} hp`;
      if (to === 'kilocalorie') return `${value * 0.860421} kcal/h`;
    case "kilowatt":
      if (to === 'watt') return `${value * 1000} W`;
      if (to === 'kilowatt') return `${value} kW`;
      if (to === 'horsepower') return `${value * 1.341022} hp`;
      if (to === 'kilocalorie') return `${value * 860.420815} kcal/h`;
    case "horsepower":
      if (to === 'watt') return `${value * 745.699872} W`;
      if (to === 'kilowatt') return `${value * 0.7457} kW`;
      if (to === 'horsepower') return `${value} hp`;
      if (to === 'kilocalorie') return `${value * 641.615691} kcal/h`;
    case "kilocalorie":
      if (to === 'watt') return `${value * 1.162222} W`;
      if (to === 'kilowatt') return `${value * 0.001162} kW`;
      if (to === 'horsepower') return `${value * 0.001559} hp`;
      if (to === 'kilocalorie') return `${value} kcal/h`;
  }
}

export function convertPressure({ value, from, to }: ConvertMeasureParams<PressureType, 'to'>) {
  switch (from) {
    case "pascal":
      if (to === 'pascal') return `${value} Pa`;
      if (to === 'atmosphere') return `${value * 0.0000098692} atm`;
      if (to === 'bar') return `${value * 0.00001} bar`;
      if (to === 'kg-per-meter') return `${value * 0.101972} kgf/m²`;
    case "atmosphere":
      if (to === 'pascal') return `${value * 101325} Pa`;
      if (to === 'atmosphere') return `${value} atm`;
      if (to === 'bar') return `${value * 1.01325} bar`;
      if (to === 'kg-per-meter') return `${value * 10332} kgf/m²`;
    case "bar":
      if (to === 'pascal') return `${value * 100000} Pa`;
      if (to === 'atmosphere') return `${value * 0.986923} atm`;
      if (to === 'bar') return `${value} bar`;
      if (to === 'kg-per-meter') return `${value * 10197} kgf/m²`;
    case "kg-per-meter":
      if (to === 'pascal') return `${value * 98067} Pa`;
      if (to === 'atmosphere') return `${value * 0.967841} atm`;
      if (to === 'bar') return `${value * 0.980665} bar`;
      if (to === 'kg-per-meter') return `${value} kgf/m²`;
  }
}

export function convertEnergy({ value, from, to }: ConvertMeasureParams<EnergyType, 'to'>) {
  switch (from) {
    case "joule":
      if (to === 'joule') return `${value} J`;
      if (to === 'kilojoule') return `${value * 0.001} kJ`;
      if (to === 'megajoule') return `${value * 0.000001} MJ`;
      if (to === 'calorie') return `${value * 0.239006} cal`;
      if (to === 'kilocalorie') return `${value * 0.000239} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.00000027778} kWh`;
      if (to === 'electronvolt') return `${value * 6241500000000000000} eV`;
    case "kilojoule":
      if (to === 'joule') return `${value * 1000} J`;
      if (to === 'kilojoule') return `${value} kJ`;
      if (to === 'megajoule') return `${value * 0.001} MJ`;
      if (to === 'calorie') return `${value * 239.005736} cal`;
      if (to === 'kilocalorie') return `${value * 0.239006} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.000278} kWh`;
      if (to === 'electronvolt') return `${value * 62415499999999999606784} eV`;
    case "megajoule":
      if (to === 'joule') return `${value * 1000000} J`;
      if (to === 'kilojoule') return `${value * 1000} kJ`;
      if (to === 'megajoule') return `${value} MJ`;
      if (to === 'calorie') return `${value * 239006} cal`;
      if (to === 'kilocalorie') return `${value * 239.005736} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.2777778} kWh`;
      if (to === 'electronvolt') return `${value * 6241499999999999833276416} eV`;
    case "calorie":
      if (to === 'joule') return `${value * 4.184} J`;
      if (to === 'kilojoule') return `${value * 0.004184} kJ`;
      if (to === 'megajoule') return `${value * 0.000004184} MJ`;
      if (to === 'calorie') return `${value} cal`;
      if (to === 'kilocalorie') return `${value * 0.001} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.0000011622} kWh`;
      if (to === 'electronvolt') return `${value * 26114000000000000000} eV`;
    case "kilocalorie":
      if (to === 'joule') return `${value * 4184} J`;
      if (to === 'kilojoule') return `${value * 4.184} kJ`;
      if (to === 'megajoule') return `${value * 0.004184} MJ`;
      if (to === 'calorie') return `${value * 1000} cal`;
      if (to === 'kilocalorie') return `${value} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.001162} kWh`;
      if (to === 'electronvolt') return `${value * 26113999999999999475712} eV`;
    case "kilowatt-hour":
      if (to === 'joule') return `${value * 3600000} J`;
      if (to === 'kilojoule') return `${value * 3600} kJ`;
      if (to === 'megajoule') return `${value * 3.6} MJ`;
      if (to === 'calorie') return `${value * 860421} cal`;
      if (to === 'kilocalorie') return `${value * 860.421} kcal`;
      if (to === 'kilowatt-hour') return `${value} kWh`;
      if (to === 'electronvolt') return `${value * 22469000000000001323302912} eV`;
    case "electronvolt":
      if (to === 'joule') return `${value * 0.00000000000000000016022} J`;
      if (to === 'kilojoule') return `${value * 0.00000000000000000000016022} kJ`;
      if (to === 'megajoule') return `${value * 0.00000000000000000000000016022} MJ`;
      if (to === 'calorie') return `${value * 0.000000000000000000038293} cal`;
      if (to === 'kilocalorie') return `${value * 0.000000000000000000000038293} kcal`;
      if (to === 'kilowatt-hour') return `${value * 0.000000000000000000000000044505} kWh`;
      if (to === 'electronvolt') return `${value} eV`;
  }
}

export function convertFrequency({ value, from, to }: ConvertMeasureParams<FrequencyType, 'to'>) {
  switch (from) {
    case "hertz":
      if (to === 'hertz') return `${value} Hz`;
      if (to === 'kilohertz') return `${value * 0.001} kHz`;
      if (to === 'megahertz') return `${value * 0.000001} MHz`;
      if (to === 'gigahertz') return `${value * 0.000000001} GHz`;
      if (to === 'rpm') return `${value * 60} RPM`;
    case "kilohertz":
      if (to === 'hertz') return `${value * 1000} Hz`;
      if (to === 'kilohertz') return `${value} kHz`;
      if (to === 'megahertz') return `${value * 0.001} MHz`;
      if (to === 'gigahertz') return `${value * 0.000001} GHz`;
      if (to === 'rpm') return `${value * 60000} RPM`;
    case "megahertz":
      if (to === 'hertz') return `${value * 1000000} Hz`;
      if (to === 'kilohertz') return `${value * 1000} kHz`;
      if (to === 'megahertz') return `${value} MHz`;
      if (to === 'gigahertz') return `${value * 0.001} GHz`;
      if (to === 'rpm') return `${value * 60000000} RPM`;
    case "gigahertz":
      if (to === 'hertz') return `${value * 1000000000} Hz`;
      if (to === 'kilohertz') return `${value * 1000000} kHz`;
      if (to === 'megahertz') return `${value * 1000} MHz`;
      if (to === 'gigahertz') return `${value} GHz`;
      if (to === 'rpm') return `${value * 60000000000} RPM`;
    case "rpm":
      if (to === 'hertz') return `${value * 0.016667} Hz`;
      if (to === 'kilohertz') return `${value * 0.000016667} kHz`;
      if (to === 'megahertz') return `${value * 0.000000016667} MHz`;
      if (to === 'gigahertz') return `${value * 0.000000000016667} GHz`;
      if (to === 'rpm') return `${value} RPM`;
  }
}

export function convertTime({ value, from, to }: ConvertMeasureParams<TimeType, 'to'>) {
  switch (from) {
    case "millisecond":
      if (to === 'millisecond') return `${value} ms`;
      if (to === 'second') return `${value * 0.01} s`;
      if (to === 'minute') return `${value * 0.000016667} min`;
      if (to === 'hour') return `${value * 0.00000027778} h`;
      if (to === 'day') return `${value * 0.000000011574} dias`;
      if (to === 'week') return `${value * 0.0000000016534} semanas`;
      if (to === 'month') return `${value * 0.00000000038026} meses`;
      if (to === 'year') return `${value * 0.000000000031689} anos`;
    case "second":
      if (to === 'millisecond') return `${value * 1000} ms`;
      if (to === 'second') return `${value} s`;
      if (to === 'minute') return `${value * 0.016667} min`;
      if (to === 'hour') return `${value * 0.000278} h`;
      if (to === 'day') return `${value * 0.000011574} dias`;
      if (to === 'week') return `${value * 0.0000016534} semanas`;
      if (to === 'month') return `${value * 0.00000038026} meses`;
      if (to === 'year') return `${value * 0.000000031689} anos`;
    case "minute":
      if (to === 'millisecond') return `${value * 60000} ms`;
      if (to === 'second') return `${value * 60} s`;
      if (to === 'minute') return `${value} min`;
      if (to === 'hour') return `${value * 0.016667} h`;
      if (to === 'day') return `${value * 0.000694} dias`;
      if (to === 'week') return `${value * 0.000099206} semanas`;
      if (to === 'month') return `${value * 0.000022816} meses`;
      if (to === 'year') return `${value * 0.0000019013} anos`;
    case "hour":
      if (to === 'millisecond') return `${value * 3600000} ms`;
      if (to === 'second') return `${value * 3600} s`;
      if (to === 'minute') return `${value * 60} min`;
      if (to === 'hour') return `${value} h`;
      if (to === 'day') return `${value * 0.041667} dias`;
      if (to === 'week') return `${value * 0.005952} semanas`;
      if (to === 'month') return `${value * 0.001369} meses`;
      if (to === 'year') return `${value * 0.000114} anos`;
    case "day":
      if (to === 'millisecond') return `${value * 86400000} ms`;
      if (to === 'second') return `${value * 86400} s`;
      if (to === 'minute') return `${value * 1440} min`;
      if (to === 'hour') return `${value * 24} h`;
      if (to === 'day') return `${value} dias`;
      if (to === 'week') return `${value * 0.142857} semanas`;
      if (to === 'month') return `${value * 0.032855} meses`;
      if (to === 'year') return `${value * 0.002738} anos`;
    case "week":
      if (to === 'millisecond') return `${value * 604800000} ms`;
      if (to === 'second') return `${value * 604800} s`;
      if (to === 'minute') return `${value * 10080} min`;
      if (to === 'hour') return `${value * 168} h`;
      if (to === 'day') return `${value * 7} dias`;
      if (to === 'week') return `${value} semanas`;
      if (to === 'month') return `${value * 0.229984} meses`;
      if (to === 'year') return `${value * 0.019165} anos`;
    case "month":
      if (to === 'millisecond') return `${value * 2629746000} ms`;
      if (to === 'second') return `${value * 2629746} s`;
      if (to === 'minute') return `${value * 43829} min`;
      if (to === 'hour') return `${value * 730.485} h`;
      if (to === 'day') return `${value * 30.436875} dias`;
      if (to === 'week') return `${value * 4.348125} semanas`;
      if (to === 'month') return `${value} meses`;
      if (to === 'year') return `${value * 0.083333} anos`;
    case "year":
      if (to === 'millisecond') return `${value * 31556952000} ms`;
      if (to === 'second') return `${value * 31556952} s`;
      if (to === 'minute') return `${value * 525949} min`;
      if (to === 'hour') return `${value * 8766} h`;
      if (to === 'day') return `${value * 365.2425} dias`;
      if (to === 'week') return `${value * 52.1775} semanas`;
      if (to === 'month') return `${value * 12} meses`;
      if (to === 'year') return `${value} anos`;
  }
}
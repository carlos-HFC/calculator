import { MdCalculate, MdScience, MdDeviceThermostat, MdSpeed, MdStraighten, MdScale, MdWaterDrop, MdSquareFoot, MdElectricBolt, MdDirectionsRun, MdPower, MdSensors, MdSchedule } from 'react-icons/md';

import { MenuItems } from "@/@types";

export const MENU_ITEMS: Array<MenuItems> = [
  {
    label: "Padrão",
    value: "default",
    icon: <MdCalculate size={16} />
  },
  {
    label: "Científica",
    value: "science",
    icon: <MdScience size={16} />
  },
  {
    label: "Temperatura",
    value: "temperature",
    icon: <MdDeviceThermostat size={16} />
  },
  {
    label: "Velocidade",
    value: "speed",
    icon: <MdDirectionsRun size={16} />
  },
  {
    label: "Comprimento",
    value: "length",
    icon: <MdStraighten size={16} />
  },
  {
    label: "Peso e massa",
    value: "weight",
    icon: <MdScale size={16} />
  },
  {
    label: "Volume",
    value: "volume",
    icon: <MdWaterDrop size={16} />
  },
  {
    label: "Área",
    value: "area",
    icon: <MdSquareFoot size={16} />
  },
  {
    label: "Potência",
    value: "power",
    icon: <MdPower size={16} />
  },
  {
    label: "Pressão",
    value: "pressure",
    icon: <MdSpeed size={16} />
  },
  {
    label: "Energia",
    value: "energy",
    icon: <MdElectricBolt size={16} />
  },
  {
    label: "Frequência",
    value: "frequency",
    icon: <MdSensors size={16} />
  },
  {
    label: "Tempo",
    value: "time",
    icon: <MdSchedule size={16} />
  },
];

export const WEIGHT_OPTIONS = [
  { label: "Quilates", value: "carat" },
  { label: "Miligramas", value: "milligram" },
  { label: "Gramas", value: "gram" },
  { label: "Quilogramas", value: "kilogram" },
  { label: "Onças", value: "ounce" },
  { label: "Libras", value: "pound" },
  { label: "Toneladas", value: "ton" },
];

export const LENGTH_OPTIONS = [
  { label: "Nanômetro", value: "nanometer" },
  { label: "Micrômetro", value: "micrometer" },
  { label: "Milímetro", value: "millimeter" },
  { label: "Centímetro", value: "centimeter" },
  { label: "Metro", value: "meter" },
  { label: "Quilômetro", value: "kilometer" },
  { label: "Milha", value: "mile" },
  { label: "Pé", value: "foot" },
  { label: "Jarda", value: "yard" },
  { label: "Polegada", value: "inch" },
];

export const TEMPERATURE_OPTIONS = [
  { label: "Celsius", value: "celsius" },
  { label: "Fahrenheit", value: "fahrenheit" },
  { label: "Kelvin", value: "kelvin" },
];

export const SPEED_OPTIONS = [
  { label: "Metros por segundo", value: "meters-second" },
  { label: "Quilômetros por hora", value: "km-hour" },
  { label: "Milhas por hora", value: "miles-hour" },
  { label: "Nós", value: "knos" },
  { label: "Mach", value: "mach" },
];

export const VOLUME_OPTIONS = [
  { label: "Mililitros", value: "milliliter" },
  { label: "Centímentos cúbicos", value: "cubic-centimeter" },
  { label: "Litros", value: "liter" },
  { label: "Metros cúbicos", value: "cubic-meter" },
];

export const AREA_OPTIONS = [
  { label: "Milhas quadradas", value: "square-mile" },
  { label: "Acre", value: "acre" },
  { label: "Quilômetros quadrados", value: "square-kilometer" },
  { label: "Metros quadrados", value: "square-meter" },
  { label: "Centímetros quadrados", value: "square-centimeter" },
  { label: "Milímetros quadrados", value: "square-millimeter" },
  { label: "Hectares", value: "hectare" },
];

export const POWER_OPTIONS = [
  { label: "Watts", value: "watt" },
  { label: "Quilowatts", value: "kilowatt" },
  { label: "Cavalos de potência", value: "horsepower" },
  { label: "Quilocaloria", value: "kilocalorie" },
];

export const PRESSURE_OPTIONS = [
  { label: "Pascals", value: "pascal" },
  { label: "Atmosferas", value: "atmosphere" },
  { label: "Bars", value: "bar" },
  { label: "Kg por metro quadrado", value: "kg-per-meter" },
];

export const ENERGY_OPTIONS = [
  { label: "Joules", value: "joule" },
  { label: "Quilojoules", value: "kilojoule" },
  { label: "Megajoules", value: "megajoule" },
  { label: "Calorias térmicas", value: "calorie" },
  { label: "Calorias alimentares", value: "kilocalorie" },
  { label: "Quilowatt hora", value: "kilowatt-hour" },
  { label: "Elétrons-volts", value: "electronvolt" },
];

export const FREQUENCY_OPTIONS = [
  { label: "Hertz", value: "hertz" },
  { label: "Quilohertz", value: "kilohertz" },
  { label: "Megahertz", value: "megahertz" },
  { label: "Gigahertz", value: "gigahertz" },
  { label: "Rotações por minuto", value: "rpm" },
];

export const TIME_OPTIONS = [
  { label: "Milisegundos", value: "millisecond" },
  { label: "Segundos", value: "second" },
  { label: "Minutos", value: "minute" },
  { label: "Horas", value: "hour" },
  { label: "Dias", value: "day" },
  { label: "Semanas", value: "week" },
  { label: "Meses", value: "month" },
  { label: "Anos", value: "year" },
];
import { MdCalculate, MdScience, MdDeviceThermostat, MdSpeed, MdStraighten, MdScale } from 'react-icons/md';

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
    icon: <MdSpeed size={16} />
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
]

export const SPEED_OPTIONS = [
  { label: "Metros por segundo", value: "meters-second" },
  { label: "Quilômetros por hora", value: "km-hour" },
  { label: "Milhas por hora", value: "miles-hour" },
  { label: "Nós", value: "knos" },
  { label: "Mach", value: "mach" },
];
import { MenuItems } from "@/@types";

export const MENU_ITEMS: Array<MenuItems> = [
  {
    label: "Padrão",
    value: "default",
    icon: <span className="material-symbols-outlined">calculate</span>
  },
  {
    label: "Científica",
    value: "science",
    icon: <span className="material-symbols-outlined">experiment</span>
  },
  {
    label: "Temperatura",
    value: "temperature",
    icon: <span className="material-symbols-outlined">thermometer</span>
  },
  {
    label: "Velocidade",
    value: "speed",
    icon: <span className="material-symbols-outlined">sprint</span>
  },
  {
    label: "Comprimento",
    value: "length",
    icon: <span className="material-symbols-outlined">straighten</span>
  },
  {
    label: "Peso e massa",
    value: "weight",
    icon: <span className="material-symbols-outlined">weight</span>
  },
  {
    label: "Volume",
    value: "volume",
    icon: <span className="material-symbols-outlined">water_drop</span>
  },
  {
    label: "Área",
    value: "area",
    icon: <span className="material-symbols-outlined">square_foot</span>
  },
  {
    label: "Potência",
    value: "power",
    icon: <span className="material-symbols-outlined">power</span>
  },
  {
    label: "Pressão",
    value: "pressure",
    icon: <span className="material-symbols-outlined">speed</span>
  },
  {
    label: "Energia",
    value: "energy",
    icon: <span className="material-symbols-outlined">electric_bolt</span>
  },
  {
    label: "Frequência",
    value: "frequency",
    icon: <span className="material-symbols-outlined">sensors</span>
  },
  {
    label: "Tempo",
    value: "time",
    icon: <span className="material-symbols-outlined">schedule</span>
  },
  {
    label: "Número",
    value: "number",
    icon: <span className="material-symbols-outlined">123</span>
  },
  {
    label: "Armazenamento",
    value: "data",
    icon: <span className="material-symbols-outlined">database</span>
  },
  {
    label: "Força",
    value: "force",
    icon: <span className="material-symbols-outlined">fitness_center</span>
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

export const NUMBER_OPTIONS = [
  { label: "Binário", value: "binary" },
  { label: "Decimal", value: "decimal" },
  { label: "Hexadecimal", value: "hexadecimal" },
  { label: "Octal", value: "octal" },
];

export const DATA_OPTIONS = [
  { label: "Bit", value: "bit" },
  { label: "Byte", value: "byte" },
  { label: "Kilobyte", value: "kilobyte" },
  { label: "Megabyte", value: "megabyte" },
  { label: "Gigabyte", value: "gigabyte" },
  { label: "Terabyte", value: "terabyte" },
];

export const FORCE_OPTIONS = [
  { label: "Newton", value: "newton" },
  { label: "Força da Gravidade", value: "gravity" },
  { label: "Quilograma-Força", value: "kilogram-force" },
  { label: "Libra-Força", value: "pound-force" },
  { label: "Onça-Força", value: "ounce-force" },
];
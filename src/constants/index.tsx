import { MdCalculate, MdScience, MdDeviceThermostat, MdSpeed } from 'react-icons/md';

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
];
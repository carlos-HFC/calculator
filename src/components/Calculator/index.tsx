import { PropsWithChildren } from "react";

import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

const VARIANTS = {
  default: "grid-rows-[1fr_repeat(6,_52px)] xs:grid-rows-[1fr_repeat(6,_64px)]",
  science: "grid-rows-[1fr_repeat(7,_52px)] xs:grid-rows-[1fr_repeat(7,_64px)]",
  temperature: "grid-rows-[1fr_repeat(5,_52px)] xs:grid-rows-[1fr_repeat(5,_64px)]",
};

export function Calculator(props: PropsWithChildren) {
  const { type } = useCalculator();

  return (
    <div
      className={classNames(`bg-[#202020] p-1 grid gap-1 grid-cols-4 border border-[#3f4046] rounded-lg h-auto w-full sm:w-[420px]`, VARIANTS[type ?? 'default'])}
      {...props}
    />
  );
}
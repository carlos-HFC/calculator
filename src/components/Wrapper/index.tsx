"use client";

import { ReactNode } from "react";

import { Calculator } from "../Calculator";
import { Display } from "../Display";
import { Length } from "../Length";
import { Speed } from "../Speed";
import { Temperature } from "../Temperature";

import { CalculatorType } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

const VARIANTS: Record<CalculatorType, string> = {
  default: "grid-cols-4 grid-rows-[1fr_repeat(6,_52px)] xs:grid-rows-[1fr_repeat(6,_64px)]",
  science: "grid-cols-4 grid-rows-[1fr_repeat(7,_52px)] xs:grid-rows-[1fr_repeat(7,_64px)]",
  temperature: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
  speed: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
  length: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
};

const CALCULATORS: Record<CalculatorType, ReactNode> = {
  default: <Calculator />,
  science: <Calculator />,
  temperature: <Temperature />,
  speed: <Speed />,
  length: <Length />,
};

export function Wrapper() {
  const { type } = useCalculator();

  return (
    <div
      className={classNames(`bg-[#202020] p-1 grid gap-1 border border-[#3f4046] rounded-lg h-auto w-full sm:w-[420px]`, VARIANTS[type ?? 'default'])}
    >
      <Display />
      {CALCULATORS[type ?? 'default']}
    </div>
  );
}
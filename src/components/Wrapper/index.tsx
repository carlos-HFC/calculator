"use client";

import { ReactNode } from "react";

import { Calculator } from "../Calculator";
import { Conversor } from "../Conversor";
import { Display } from "../Display";

import { CalculatorType, LengthType, SpeedType, TemperatureType, WeightType } from "@/@types";
import { LENGTH_OPTIONS, SPEED_OPTIONS, TEMPERATURE_OPTIONS, WEIGHT_OPTIONS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { classNames, convertLength, convertSpeed, convertTemperature, convertWeight } from "@/utils";

const VARIANTS: Record<CalculatorType, string> = {
  default: "grid-cols-4 grid-rows-[1fr_repeat(6,_52px)] xs:grid-rows-[1fr_repeat(6,_64px)]",
  science: "grid-cols-4 grid-rows-[1fr_repeat(7,_52px)] xs:grid-rows-[1fr_repeat(7,_64px)]",
  temperature: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
  speed: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
  length: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
  weight: "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]",
};

const CALCULATORS: Record<CalculatorType, ReactNode> = {
  default: <Calculator />,
  science: <Calculator />,
  temperature: (
    <Conversor<TemperatureType>
      chooseConversion={convertTemperature}
      list={TEMPERATURE_OPTIONS}
      initialValue={{
        from: "celsius",
        to: "fahrenheit"
      }}
    />
  ),
  speed: (
    <Conversor<SpeedType>
      chooseConversion={convertSpeed}
      list={SPEED_OPTIONS}
      initialValue={{
        from: "meters-second",
        to: "km-hour"
      }}
    />
  ),
  length: (
    <Conversor<LengthType>
      chooseConversion={convertLength}
      list={LENGTH_OPTIONS}
      initialValue={{
        from: "centimeter",
        to: "meter"
      }}
    />
  ),
  weight: (
    <Conversor<WeightType>
      chooseConversion={convertWeight}
      list={WEIGHT_OPTIONS}
      initialValue={{
        from: "gram",
        to: "kilogram"
      }}
    />
  ),
};

export function Wrapper() {
  const { type } = useCalculator();

  return (
    <div className={classNames(`bg-[#202020] p-1 grid gap-1 border border-[#3f4046] rounded-lg h-auto w-full sm:w-[420px]`, VARIANTS[type ?? 'default'])}>
      <Display />
      {CALCULATORS[type ?? 'default']}
    </div>
  );
}
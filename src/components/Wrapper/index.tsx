"use client";

import { ReactNode } from "react";

import { Calculator } from "../Calculator";
import { Conversor } from "../Conversor";
import { Display } from "../Display";

import { AreaType, CalculatorType, LengthType, PowerType, SpeedType, TemperatureType, VolumeType, WeightType } from "@/@types";
import { AREA_OPTIONS, LENGTH_OPTIONS, POWER_OPTIONS, SPEED_OPTIONS, TEMPERATURE_OPTIONS, VOLUME_OPTIONS, WEIGHT_OPTIONS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { classNames, convertArea, convertLength, convertPower, convertSpeed, convertTemperature, convertVolume, convertWeight } from "@/utils";

const VARIANTS = (type: CalculatorType) => {
  switch (type) {
    case "temperature":
    case "speed":
    case "length":
    case "weight":
    case "volume":
    case "area":
    case "power":
      return "grid-cols-3 grid-rows-[1fr_repeat(6,_minmax(52px,_auto))] xs:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]";
    case "default":
    case "science":
    default:
      return "grid-cols-4 grid-rows-[1fr_repeat(6,_52px)] xs:grid-rows-[1fr_repeat(6,_64px)]";
  }
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
  volume: (
    <Conversor<VolumeType>
      chooseConversion={convertVolume}
      list={VOLUME_OPTIONS}
      initialValue={{
        from: "milliliter",
        to: "liter"
      }}
    />
  ),
  area: (
    <Conversor<AreaType>
      chooseConversion={convertArea}
      list={AREA_OPTIONS}
      initialValue={{
        from: "square-meter",
        to: "hectare"
      }}
    />
  ),
  power: (
    <Conversor<PowerType>
      chooseConversion={convertPower}
      list={POWER_OPTIONS}
      initialValue={{
        from: "watt",
        to: "kilowatt"
      }}
    />
  ),
};

export function Wrapper() {
  const { type } = useCalculator();

  return (
    <div className={classNames(`bg-[#202020] p-1 grid gap-1 border border-[#3f4046] rounded-lg h-auto w-full sm:w-[420px]`, VARIANTS(type))}>
      <Display />
      {CALCULATORS[type ?? 'default']}
    </div>
  );
}
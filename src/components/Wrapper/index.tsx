"use client";

import { ReactNode } from "react";

import { Calculator } from "../Calculator";
import { Conversor } from "../Conversor";
import { Display } from "../Display";

import { AreaType, CalculatorType, DataType, EnergyType, ForceType, FrequencyType, LengthType, NumberType, PowerType, PressureType, SpeedType, TemperatureType, TimeType, VolumeType, WeightType } from "@/@types";
import { AREA_OPTIONS, DATA_OPTIONS, ENERGY_OPTIONS, FORCE_OPTIONS, FREQUENCY_OPTIONS, LENGTH_OPTIONS, NUMBER_OPTIONS, POWER_OPTIONS, PRESSURE_OPTIONS, SPEED_OPTIONS, TEMPERATURE_OPTIONS, TIME_OPTIONS, VOLUME_OPTIONS, WEIGHT_OPTIONS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { cn, convertArea, convertData, convertEnergy, convertForce, convertFrequency, convertLength, convertNumber, convertPower, convertPressure, convertSpeed, convertTemperature, convertTime, convertVolume, convertWeight } from "@/utils";

const VARIANTS = (type: CalculatorType) => {
  switch (type) {
    case "number":
      return "grid-cols-3 sm:grid-rows-[1fr_repeat(8,_minmax(64px,_auto))]";
    case "default":
      return "grid-cols-4 sm:grid-rows-[1fr_repeat(6,_76px)]";
    default:
      return "grid-cols-3 sm:grid-rows-[1fr_repeat(6,_minmax(64px,_auto))]";
  }
};

const CALCULATORS: Record<CalculatorType, ReactNode> = {
  default: <Calculator />,
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
  pressure: (
    <Conversor<PressureType>
      chooseConversion={convertPressure}
      list={PRESSURE_OPTIONS}
      initialValue={{
        from: "atmosphere",
        to: "bar"
      }}
    />
  ),
  energy: (
    <Conversor<EnergyType>
      chooseConversion={convertEnergy}
      list={ENERGY_OPTIONS}
      initialValue={{
        from: "joule",
        to: "kilocalorie"
      }}
    />
  ),
  frequency: (
    <Conversor<FrequencyType>
      chooseConversion={convertFrequency}
      list={FREQUENCY_OPTIONS}
      initialValue={{
        from: "hertz",
        to: "megahertz"
      }}
    />
  ),
  time: (
    <Conversor<TimeType>
      chooseConversion={convertTime}
      list={TIME_OPTIONS}
      initialValue={{
        from: "minute",
        to: "hour"
      }}
    />
  ),
  number: (
    <Conversor<NumberType>
      chooseConversion={convertNumber}
      list={NUMBER_OPTIONS}
      initialValue={{
        from: "decimal",
        to: "binary"
      }}
    />
  ),
  data: (
    <Conversor<DataType>
      chooseConversion={convertData}
      list={DATA_OPTIONS}
      initialValue={{
        from: "byte",
        to: "kilobyte"
      }}
    />
  ),
  force: (
    <Conversor<ForceType>
      chooseConversion={convertForce}
      list={FORCE_OPTIONS}
      initialValue={{
        from: "newton",
        to: "gravity"
      }}
    />
  ),
};

export function Wrapper() {
  const { type } = useCalculator();

  return (
    <div className={cn(`bg-[#202020] p-1 grid gap-1 flex-1 sm:flex-initial sm:rounded-lg h-full sm:h-auto w-full sm:w-[420px]`, VARIANTS(type))}>
      <Display />
      {CALCULATORS[type]}
    </div>
  );
}
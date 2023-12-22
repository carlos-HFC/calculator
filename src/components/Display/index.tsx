import { CalculatorType } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

const VARIANTS = (type: CalculatorType) => {
  switch (type) {
    case "temperature":
    case "speed":
    case "length":
    case "weight":
      return 'text-5xl py-6'
    case "default":
    case "science":
    default:
      return 'justify-end text-6xl py-10'
  }
};

export function Display() {
  const { type, display } = useCalculator();

  return (
    <div className={classNames("overflow-hidden px-4 flex items-center bg-[#202020] font-semibold col-span-full", VARIANTS(type))}>
      <p className="overflow-x-auto overflow-y-hidden font-sans">
        {display}
      </p>
    </div>
  );
}
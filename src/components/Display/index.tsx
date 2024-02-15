import { CalculatorType } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { cn } from "@/utils";

const VARIANTS = (type: CalculatorType) => {
  switch (type) {
    case "default":
      return 'justify-end text-6xl py-10';
    default:
      return 'text-5xl py-6';
  }
};

export function Display() {
  const { type, display, setDisplay } = useCalculator();

  return (
    <div className={cn("overflow-hidden px-4 flex items-center bg-[#202020] font-semibold col-span-full", VARIANTS(type))}>
      <input
        readOnly
        type="text"
        value={display}
        onChange={e => setDisplay(e.target.value)}
        className="bg-transparent w-full text-right font-sans outline-none"
      />
    </div>
  );
}
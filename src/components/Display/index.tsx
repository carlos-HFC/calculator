import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

export function Display() {
  const { type, display } = useCalculator();

  return (
    <div className={classNames("overflow-hidden px-4 flex items-center bg-[#202020] font-semibold col-span-full", type === 'temperature' ? 'text-5xl py-6' : 'justify-end text-6xl py-10')}>
      <p className="overflow-x-auto overflow-y-hidden font-sans">
        {display}
      </p>
    </div>
  );
}
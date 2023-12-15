import { CalculatorType } from "@/@types";

interface CalculatorProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: CalculatorType;
}

export function Calculator(props: CalculatorProps) {
  const variant = {
    default: "grid-rows-[1fr_repeat(6,_78px)]",
    science: "grid-rows-[1fr_repeat(7,_78px)]"
  };

  return (
    <div
      className={`bg-[#202020] p-1 grid gap-1 grid-cols-4 ${variant[props?.type ?? 'default']} border border-[#3f4046] rounded-lg w-[480px] h-auto`}
      {...props}
    />
  );
}
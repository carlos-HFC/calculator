interface CalculatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Calculator(props: CalculatorProps) {
  return (
    <div className="bg-[#202020] p-1 grid gap-1 grid-cols-4 grid-rows-[1fr_repeat(6,_78px)] border border-[#3f4046] rounded-lg w-[480px] h-auto" {...props} />
  );
}
interface DisplayProps {
  value: string;
}

export function Display(props: DisplayProps) {
  return (
    <div className="overflow-hidden text-6xl py-10 px-4 flex items-center justify-end bg-[#202020] font-semibold col-span-4">
      <p className="overflow-x-auto overflow-y-hidden font-sans">
        {props.value}
      </p>
    </div>
  );
}
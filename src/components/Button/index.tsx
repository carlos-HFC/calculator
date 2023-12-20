import { classNames } from "@/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'bt-type': 'number' | 'operation' | 'equal';
  label: React.ReactNode;
  double?: boolean;
}

const VARIANTS = {
  number: 'bg-[#3b3b3b] text-white hover:bg-[#323232] active:bg-[#282828] active:border-[#303030]',
  operation: 'bg-[#323232] text-white hover:bg-[#3b3b3b] active:bg-[#323232]',
  equal: 'bg-[#ff99a1] text-[#472b2d] hover:bg-[#e88c93] active:bg-[#d28086]',
  disabled: 'bg-[#282828] text-[#737373]'
};

export function Button({ double, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(`w-full font-sans text-base xs:text-xl border border-transparent outline-none duration-300 rounded-md cursor-default disabled:pointer-events-none`, double ? 'col-span-2' : '', props.disabled ? VARIANTS['disabled'] : VARIANTS[props["bt-type"]], props?.className ?? '')}
      children={props.label}
    />
  );
}
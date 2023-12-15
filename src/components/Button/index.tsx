interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'bt-type': 'number' | 'operation' | 'equal';
  label: React.ReactNode;
  double?: boolean;
}

export function Button({ double, ...props }: ButtonProps) {
  const variant = {
    number: 'bg-[#3b3b3b] text-white hover:bg-[#323232] active:bg-[#282828] active:border-[#303030]',
    operation: 'bg-[#323232] text-white hover:bg-[#3b3b3b] active:bg-[#323232]',
    equal: 'bg-[#ff99a1] text-[#472b2d] hover:bg-[#e88c93] active:bg-[#d28086]',
    disabled: 'bg-[#282828] text-[#737373]'
  };

  return (
    <button
      className={`font-sans text-2xl border border-transparent outline-none duration-300 rounded-md cursor-default ${double ? 'col-span-2' : ''} ${props.disabled ? variant['disabled'] : variant[props["bt-type"]]} disabled:pointer-events-none`}
      children={props.label}
      {...props}
    />
  );
}
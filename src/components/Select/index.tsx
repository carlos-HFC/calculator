import { SelectHTMLAttributes } from "react";

import { cn } from "@/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={cn("text-white text-sm w-max bg-transparent border-white pr-8 appearance-none border-0 outline-0 temp-select bg-no-repeat bg-[length:1rem] bg-right", props?.className ?? '')}
    />
  );
}
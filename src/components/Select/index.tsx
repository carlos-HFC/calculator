import { SelectHTMLAttributes } from "react";

import { classNames } from "@/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={classNames("text-white text-sm w-max bg-transparent temp-select border-white pr-8 appearance-none border-0 outline-none", props?.className ?? '')}
    />
  );
}
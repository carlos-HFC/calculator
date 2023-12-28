import { ReactNode } from "react";

import { classNames } from "@/utils";

interface NavItemProps {
  isActive: boolean;
  onClick(): void;
  icon: ReactNode;
  label: string;
}

export function NavItem(props: NavItemProps) {
  return (
    <li>
      <button
        className={classNames("border-0 outline-none text-left w-full cursor-pointer duration-[250ms] px-4 py-6 text-lg flex items-center gap-1", props.isActive ? "bg-zinc-700" : "hover:bg-zinc-800")}
        onClick={props.onClick}
      >
        {props.icon}
        {props.label}
      </button>
    </li>
  );
}
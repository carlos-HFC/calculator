import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";
import { MdMenu } from "react-icons/md";

import { CalculatorType } from "@/@types";
import { MENU_ITEMS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

export const Nav = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const { type, handleType } = useCalculator();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden');
    }

    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [isOpen]);

  const changeType = useCallback(
    (type: CalculatorType) => {
      handleType(type);
      setIsOpen(false);
    },
    []
  );

  return (
    <nav className="flex mx-auto max-w-7xl items-center justify-between p-4">
      <div className="flex">
        <button
          className="relative flex w-10 h-10 border-0 outline-none"
          onClick={() => changeType('default')}
        >
          <Image
            src="/calculator.png"
            alt="Calculadora"
            fill
            priority
            sizes="40px"
          />
        </button>
      </div>

      <div className="flex">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          aria-hidden="true"
          aria-controls="menu"
          id="menulist"
        >
          <MdMenu
            size={32}
            aria-label="Abrir e fechar menu"
          />
        </button>
      </div>

      <div
        className={classNames("bg-zinc-900/40 w-full duration-300 absolute top-full inset-0 h-[calc(100vh-100%)] flex justify-end", isOpen ? "opacity-100 z-10" : "opacity-0 -z-10 pointer-events-none")}
        onClick={() => setIsOpen(false)}
      />

      <ul
        id="menu"
        aria-labelledby="menulist"
        className={classNames("bg-zinc-900 absolute duration-500 top-full right-0 h-[calc(100vh-100%)] flex flex-col text-left w-full md:w-1/3 z-10 overflow-auto", isOpen ? "translate-x-0" : "translate-x-full")}
        onClick={e => e.stopPropagation()}
      >
        {MENU_ITEMS.map((menu, i) => (
          <li key={i.toString().padStart(4, '0')}>
            <button
              className={classNames("border-0 outline-none text-left w-full cursor-pointer duration-[250ms] px-4 py-6 text-lg flex items-center gap-1", menu.value === type ? "bg-zinc-700" : "hover:bg-zinc-800")}
              onClick={() => changeType(menu.value)}
            >
              {menu.icon}
              {menu.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});
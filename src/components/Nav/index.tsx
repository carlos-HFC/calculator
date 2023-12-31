import Image from "next/image";
import { useState, useEffect, useCallback, memo } from "react";

import { NavItem } from "../NavItem";

import { CalculatorType } from "@/@types";
import { MENU_ITEMS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

export const Nav = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const { type, handleType } = useCalculator();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.documentElement.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.removeEventListener("click", closeMenu);
    };
  });

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden');
    }

    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const changeType = useCallback(
    (type: CalculatorType) => {
      handleType(type);
      closeMenu;
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
          aria-controls="menu"
          id="menulist"
          className="flex items-center justify-center"
          aria-label="Abrir e fechar menu"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="material-symbols-outlined text-[2rem]">
            menu
          </span>
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
        {MENU_ITEMS.map(menu => (
          <NavItem
            key={menu.label}
            icon={menu.icon}
            label={menu.label}
            isActive={menu.value === type}
            onClick={() => changeType(menu.value)}
          />
        ))}
      </ul>
    </nav>
  );
});
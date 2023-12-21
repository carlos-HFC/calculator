"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdMenu } from 'react-icons/md';

import { CalculatorType } from "@/@types";
import { MENU_ITEMS } from "@/constants";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { type, handleType } = useCalculator();

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
    <header className="bg-zinc-900 w-full text-white">
      <nav className="flex mx-auto max-w-7xl items-center justify-between p-4 relative">
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

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            aria-hidden="true"
            aria-controls="menu"
            id="menulist"
          >
            <MdMenu
              size={24}
              aria-label="Abrir e fechar menu"
            />
          </button>
        </div>

        <ul
          id="menu"
          aria-labelledby="menulist"
          className={classNames("z-1 absolute md:relative bg-zinc-900 inset-0 top-full h-[calc(100vh-100%)] flex flex-col md:flex-row md:items-center text-left duration-500 md:translate-x-0", isOpen ? "translate-x-0" : "translate-x-full")}
        >
          {MENU_ITEMS.map((menu, i) => (
            <li key={i.toString().padStart(4, '0')}>
              <button
                className={classNames("border-0 outline-none text-left w-full cursor-pointer md:rounded duration-[250ms] md:w-max px-4 md:px-4 py-6 md:py-3 text-lg md:text-base flex items-center gap-1", menu.value === type ? "bg-zinc-700" : "hover:bg-zinc-800")}
                onClick={() => changeType(menu.value)}
              >
                {menu.icon}
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
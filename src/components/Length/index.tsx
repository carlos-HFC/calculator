"use client";

import { useMemo, useEffect, useCallback, useState } from "react";
import { MdSync } from "react-icons/md";

import { Button } from "../Button";
import { Select } from "../Select";

import { ChooseConversion, LengthType } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { convertLength } from "@/utils";

const OPTIONS = [
  { label: "Milímetro", value: "milimeter" },
  { label: "Centímetro", value: "centimeter" },
  { label: "Metro", value: "meter" },
  { label: "Quilômetro", value: "kilometer" },
  { label: "Milha", value: "mile" },
  { label: "Pé", value: "foot" },
  { label: "Jarda", value: "yard" },
  { label: "Polegada", value: "inch" },
];

export function Length() {
  const { display, setDisplay } = useCalculator();

  const [conversion, setConversion] = useState<ChooseConversion<LengthType>>({
    from: "centimeter",
    to: "meter"
  });

  const lengthConverted = useMemo(() => {
    return convertLength({
      value: Number(display),
      ...conversion
    });
  }, [display, conversion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Backspace':
          return erase();
        case 'Escape':
        case 'Delete':
          return clearDisplay();
        case ',':
        case '.':
          return addCharacter('.');
        case '0':
          return addCharacter('0');
        case '1':
          return addCharacter('1');
        case '2':
          return addCharacter('2');
        case '3':
          return addCharacter('3');
        case '4':
          return addCharacter('4');
        case '5':
          return addCharacter('5');
        case '6':
          return addCharacter('6');
        case '7':
          return addCharacter('7');
        case '8':
          return addCharacter('8');
        case '9':
          return addCharacter('9');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  });

  const clearDisplay = useCallback(
    () => {
      setDisplay('0');
    },
    []
  );

  const erase = useCallback(
    () => {
      setDisplay(prev => prev.slice(0, -1) || '0');
    },
    [display]
  );

  const addCharacter = useCallback(
    (character: string | number) => {
      setDisplay(prev => {
        if (character === '.' && prev.includes('.')) return prev;

        return prev === '0'
          ? `${character}`
          : `${prev}${character}`;
      });
    },
    []
  );

  const invertConversion = useCallback(
    () => {
      setConversion(prev => {
        return {
          to: prev.from,
          from: prev.to,
        };
      });
    },
    []
  );

  return (
    <>
      <div className="col-span-full flex flex-col items-start px-4 justify-end pb-2 gap-2">
        <div className="relative flex flex-col gap-2 w-full justify-center">
          <Select
            value={conversion.from}
            onChange={e => setConversion(prev => ({ ...prev, from: e.target.value as LengthType }))}
          >
            {OPTIONS.map((option, i) => (
              <option
                key={i.toString().concat('option_from')}
                value={option.value}
                disabled={conversion.to === option.value}
              >
                {option.label}
              </option>
            ))}
          </Select>

          <Select
            value={conversion.to}
            onChange={e => setConversion(prev => ({ ...prev, to: e.target.value as LengthType }))}
          >
            {OPTIONS.map((option, i) => (
              <option
                key={i.toString().concat('option_to')}
                value={option.value}
                disabled={conversion.from === option.value}
              >
                {option.label}
              </option>
            ))}
          </Select>

          <button
            className="border-0 outline-none w-8 absolute right-0 flex items-center justify-center aspect-square"
            onClick={invertConversion}
          >
            <MdSync size="100%" />
          </button>
        </div>

        <div className="flex flex-col items-start">
          <small className="text-xs text-neutral-400">
            Aproximadamente
          </small>

          <div className="flex flex-row gap-6">
            <p
              className="text-base text-neutral-400"
            >
              <span className="text-white font-medium">{lengthConverted?.split(" ")[0]}</span> {lengthConverted?.split(" ")[1]}
            </p>
          </div>
        </div>
      </div>

      <Button className="col-start-2" label="C" bt-type="operation" onClick={clearDisplay} />
      <Button label="⌫" bt-type="operation" onClick={erase} />

      <Button label="7" bt-type="number" onClick={() => addCharacter(7)} />
      <Button label="8" bt-type="number" onClick={() => addCharacter(8)} />
      <Button label="9" bt-type="number" onClick={() => addCharacter(9)} />

      <Button label="4" bt-type="number" onClick={() => addCharacter(4)} />
      <Button label="5" bt-type="number" onClick={() => addCharacter(5)} />
      <Button label="6" bt-type="number" onClick={() => addCharacter(6)} />

      <Button label="1" bt-type="number" onClick={() => addCharacter(1)} />
      <Button label="2" bt-type="number" onClick={() => addCharacter(2)} />
      <Button label="3" bt-type="number" onClick={() => addCharacter(3)} />

      <Button className="col-start-2" label="0" bt-type="number" onClick={() => addCharacter(0)} />
      <Button label="," bt-type="number" onClick={() => addCharacter('.')} />
    </>
  );
}
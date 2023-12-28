"use client";

import { useState, useEffect, useCallback, useMemo, ChangeEvent } from "react";
import { MdSync } from "react-icons/md";

import { Button } from "../Button";
import { Select } from "../Select";

import { ChooseConversion, ConvertMeasureParams } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { classNames } from "@/utils";

interface ConversorProps<T> {
  chooseConversion(params: ConvertMeasureParams<T, 'to'>): string | number | undefined;
  list: {
    label: string;
    value: string;
  }[];
  initialValue: {
    from: T;
    to: T;
  };
}

export function Conversor<T>(props: ConversorProps<T>) {
  const { display, setDisplay, type } = useCalculator();

  const [conversion, setConversion] = useState<ChooseConversion<T>>(props.initialValue);

  const IS_NUMBER_CONVERSION = type === 'number';

  const IS_BINARY_CONVERSION = useMemo(() => conversion.from === 'binary', [conversion.from]);
  const IS_OCTAL_CONVERSION = useMemo(() => conversion.from === 'octal', [conversion.from]);
  const IS_HEXADECIMAL_CONVERSION = useMemo(() => conversion.from === 'hexadecimal', [conversion.from]);

  const valueConverted = useMemo(() => {
    const value = props.chooseConversion({
      value: display as any,
      ...conversion
    });

    if (IS_NUMBER_CONVERSION) {
      return (
        <p className="text-base text-neutral-400">
          <span className="text-white font-medium">
            {value}
          </span>
        </p>
      );
    }

    const formatNum = Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: type !== 'time' ? 6 : 2
    });

    const num = String(value)?.split(' ')[0];
    const measure = String(value)?.split(' ')[1];

    return (
      <p className="text-base text-neutral-400">
        <span className="text-white font-medium">
          {num?.includes('e')
            ? <>{formatNum.format(Number(num.split('e')[0]))} x 10<sup>{num.split('e')[1]}</sup></>
            : <>{formatNum.format(Number(num))}</>}
        </span> {measure}
      </p>
    );
  }, [display, conversion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'a':
        case 'A':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('A');
        case 'b':
        case 'B':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('B');
        case 'c':
        case 'C':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('C');
        case 'd':
        case 'D':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('D');
        case 'e':
        case 'E':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('E');
        case 'f':
        case 'F':
          if (IS_NUMBER_CONVERSION && conversion.from === 'hexadecimal') return addCharacter('F');
        case 'Backspace':
          return erase();
        case 'Escape':
        case 'Delete':
          return clearDisplay();
        case ',':
        case '.':
          if (!IS_NUMBER_CONVERSION) return addCharacter('.');
        case '0':
          return addCharacter('0');
        case '1':
          return addCharacter('1');
        case '2':
          if (conversion.from !== 'binary') return addCharacter('2');
        case '3':
          if (conversion.from !== 'binary') return addCharacter('3');
        case '4':
          if (conversion.from !== 'binary') return addCharacter('4');
        case '5':
          if (conversion.from !== 'binary') return addCharacter('5');
        case '6':
          if (conversion.from !== 'binary') return addCharacter('6');
        case '7':
          if (conversion.from !== 'binary') return addCharacter('7');
        case '8':
          if (conversion.from !== 'binary') return addCharacter('8');
        case '9':
          if (conversion.from !== 'binary') return addCharacter('9');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  });

  useEffect(() => {
    setConversion(props.initialValue);
  }, [type]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setConversion(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }));

      if (IS_NUMBER_CONVERSION) clearDisplay();
    },
    []
  );

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
      setConversion(prev => ({
        to: prev.from,
        from: prev.to,
      }));

      if (IS_NUMBER_CONVERSION) clearDisplay();
    },
    []
  );

  return (
    <>
      <div className="col-span-full flex flex-col items-start px-4 justify-end pb-2 gap-2">
        <div className="relative flex flex-col gap-2 w-full justify-center">
          <Select
            name="from"
            value={conversion.from as string}
            onChange={onChange}
          >
            {props.list.map((option, i) => (
              <option
                key={`${option.label}-from-${i}`}
                value={option.value}
                disabled={conversion.to === option.value}
              >
                {option.label}
              </option>
            ))}
          </Select>

          <Select
            name="to"
            value={conversion.to as string}
            onChange={onChange}
          >
            {props.list.map((option, i) => (
              <option
                key={`${option.label}-to-${i}`}
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
            {valueConverted}
          </div>
        </div>
      </div>

      <Button className="col-start-2" label="C" bt-type="operation" onClick={clearDisplay} />
      <Button label="⌫" bt-type="operation" onClick={erase} />

      <Button disabled={IS_BINARY_CONVERSION} label="7" bt-type="number" onClick={() => addCharacter(7)} />
      <Button disabled={IS_BINARY_CONVERSION || IS_OCTAL_CONVERSION} label="8" bt-type="number" onClick={() => addCharacter(8)} />
      <Button disabled={IS_BINARY_CONVERSION || IS_OCTAL_CONVERSION} label="9" bt-type="number" onClick={() => addCharacter(9)} />

      <Button disabled={IS_BINARY_CONVERSION} label="4" bt-type="number" onClick={() => addCharacter(4)} />
      <Button disabled={IS_BINARY_CONVERSION} label="5" bt-type="number" onClick={() => addCharacter(5)} />
      <Button disabled={IS_BINARY_CONVERSION} label="6" bt-type="number" onClick={() => addCharacter(6)} />

      <Button label="1" bt-type="number" onClick={() => addCharacter(1)} />
      <Button disabled={IS_BINARY_CONVERSION} label="2" bt-type="number" onClick={() => addCharacter(2)} />
      <Button disabled={IS_BINARY_CONVERSION} label="3" bt-type="number" onClick={() => addCharacter(3)} />

      {IS_NUMBER_CONVERSION && (
        <>
          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="A" bt-type="number" onClick={() => addCharacter("A")} />
          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="B" bt-type="number" onClick={() => addCharacter("B")} />
          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="C" bt-type="number" onClick={() => addCharacter("C")} />

          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="D" bt-type="number" onClick={() => addCharacter("D")} />
          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="E" bt-type="number" onClick={() => addCharacter("E")} />
          <Button disabled={!IS_HEXADECIMAL_CONVERSION} label="F" bt-type="number" onClick={() => addCharacter("F")} />
        </>
      )}

      <Button className={classNames(IS_NUMBER_CONVERSION ? 'col-span-full' : 'col-start-2')} label="0" bt-type="number" onClick={() => addCharacter(0)} />

      {(!IS_NUMBER_CONVERSION) && (
        <Button label="," bt-type="number" onClick={() => addCharacter('.')} />
      )}
    </>
  );
}
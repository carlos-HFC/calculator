"use client";

import { useMemo, useEffect, useCallback, useState } from "react";

import { Button } from "../Button";
import { Select } from "../Select";

import { TemperatureType } from "@/@types";
import { useCalculator } from "@/contexts/Calculator";
import { convertTemperature } from "@/utils";

export function Temperature() {
  const { display, setDisplay } = useCalculator();

  const [temperature, setTemperature] = useState<TemperatureType>("celsius");

  const temperatureConverted = useMemo(() => {
    const value = convertTemperature(Number(display), temperature);

    delete value[temperature];
    return Object.values(value);
  }, [display, temperature]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Backspace':
          return erase();
        case 'Escape':
        case 'Delete':
          return clearDisplay();
        case '-':
          return addCharacter('-');
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
        if (
          (character === '.' && prev.includes('.')) ||
          (character === '-' && prev.includes('-')) ||
          (character === '-' && prev !== '0')
        ) return prev;

        return prev === '0'
          ? `${character}`
          : `${prev}${character}`;
      });
    },
    []
  );

  return (
    <>
      <div className="col-span-full flex flex-col items-start px-4 justify-end pb-2 gap-2">
        <Select
          value={temperature}
          onChange={e => setTemperature(e.target.value as TemperatureType)}
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </Select>

        <div className="flex flex-col items-start">
          <small className="text-xs text-neutral-400">
            Aproximadamente
          </small>

          <div className="flex flex-row gap-6">
            {temperatureConverted.map((item, i) => (
              <p
                key={i.toString().padEnd(4, '0')}
                className="text-base text-neutral-400"
              >
                <strong className="text-white font-semibold">{item.split(' ')[0]}</strong> {item.split(' ')[1]}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Button label="C" bt-type="operation" double onClick={clearDisplay} />
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

      <Button label="&#xB1;" bt-type="number" onClick={() => addCharacter('-')} />
      <Button label="0" bt-type="number" onClick={() => addCharacter(0)} />
      <Button label="," bt-type="number" onClick={() => addCharacter('.')} />
    </>
  );
}
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { CalculatorType } from "@/@types";
import { Button } from "@/components/Button";
import { Calculator } from "@/components/Calculator";
import { Display } from "@/components/Display";
import { factorialize, termialize } from "@/utils";

const INITIAL_STATE = {
  clear: false,
  operation: null as null | string,
  values: [0, 0],
  current: 0
};

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [calc, setCalc] = useState(INITIAL_STATE);
  const [type] = useState<CalculatorType>("science");

  const IS_SCIENCE = useMemo(() => type === 'science', [type]);
  const error = useMemo(() => display === 'Erro', [display]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Backspace':
          return erase();
        case 'Enter':
          return setOperation('=');
        case 'Escape':
        case 'Delete':
          return clearDisplay();
        case '/':
          return setOperation('/');
        case '+':
          return setOperation('+');
        case '-':
          return setOperation('-');
        case '*':
          return setOperation('*');
        case '%':
          return setOperation('%');
        case '?':
          return setOperation('?');
        case '!':
          return setOperation('!');
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
        case 'Dead':
          return setOperation('pow');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  });

  const clearDisplay = useCallback(
    () => {
      setDisplay('0');
      setCalc(INITIAL_STATE);
    },
    []
  );

  const erase = useCallback(
    () => {
      setDisplay(prev => {
        const newValue = prev.slice(0, -1) || '0';

        const values = [...calc.values];
        values[calc.current] = Number(newValue);
        setCalc(prev => ({ ...prev, values }));

        return newValue;
      });
    },
    [calc, display]
  );

  const addCharacter = useCallback(
    (character: string | number) => {
      if (
        (character === '.' && display.includes('.')) ||
        (character === '-' && display.includes('-'))
      ) return;

      const clear = display === '0' || calc.clear;
      const current = clear ? '' : display;
      const displayValue = `${current}${character}`;
      setDisplay(displayValue);
      setCalc(prev => ({ ...prev, clear: false }));

      if (character !== '.') {
        const values = [...calc.values];
        values[calc.current] = Number(displayValue);
        setCalc(prev => ({ ...prev, values }));
      }
    },
    [display, calc]
  );

  const setOperation = useCallback(
    (operacao: string) => {
      const BASIC_OPERATION = operacao === '/' || operacao === '-' || operacao === '+' || operacao === '*' || operacao === '=' || operacao === '%';

      const { current, operation, values } = calc;

      if (BASIC_OPERATION) {
        if (current === 0) {
          return setCalc(prev => ({
            ...prev,
            operation: operacao,
            current: 1,
            clear: true
          }));
        }

        switch (operation) {
          case '+':
            values[0] = values[0] + values[1];
            break;
          case '-':
            values[0] = values[0] - values[1];
            break;
          case '/':
            values[0] = values[0] / values[1];
            break;
          case '*':
            values[0] = values[0] * values[1];
            break;
          case '%':
            values[0] = values[0] % values[1];
            break;
        }
      }

      switch (operacao) {
        case 'sqrt':
          const sqrtValue = String(Math.sqrt(values[0]));
          setDisplay(sqrtValue);

          values[0] = Number(sqrtValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case 'fractal':
          const fractalValue = String(1 / values[0]);
          setDisplay(fractalValue);

          values[0] = Number(fractalValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case 'pow':
          const powValue = String(Math.pow(values[0], 2));
          setDisplay(powValue);

          values[0] = Number(powValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case 'pi':
          const piValue = String(Math.PI);
          setDisplay(piValue);

          values[0] = Number(piValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case '!':
          if (values[0] < 0) return setDisplay("Erro");

          const factorialValue = String(factorialize(values[0]));
          setDisplay(factorialValue);

          values[0] = Number(factorialValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case '?':
          const termialValue = String(termialize(values[0]));
          setDisplay(termialValue);

          values[0] = Number(termialValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
        case 'abs':
          const absValue = String(Math.abs(values[0]));
          setDisplay(absValue);

          values[0] = Number(absValue);
          return setCalc(prev => ({
            ...prev,
            clear: true,
            values
          }));
      }

      const equals = operacao === '=';

      const newValue = values[0] === Infinity ? 'Erro' : values[0];

      values[1] = 0;
      setDisplay(String(newValue));
      setCalc({
        operation: equals ? null : operacao,
        current: equals ? 0 : 1,
        clear: !equals,
        values
      });
    },
    [calc, display, error]
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center text-white bg-default select-none">
      <Calculator type={type}>
        <Display value={display} />
        {IS_SCIENCE &&
          <Button disabled={error} label="&#x3C0;" bt-type="operation" onClick={() => setOperation('pi')} />
        }
        <Button label="C" bt-type="operation" double onClick={clearDisplay} />
        <Button disabled={error} label="⌫" bt-type="operation" double={!IS_SCIENCE} onClick={erase} />

        {IS_SCIENCE && (
          <>
            <Button disabled={error} label="|&#x1D465;|" bt-type="operation" onClick={() => setOperation('abs')} />
            <Button disabled={error} label="&#x1D45B;?" bt-type="operation" onClick={() => setOperation('?')} />
            <Button disabled={error} label="&#x1D45B;!" bt-type="operation" onClick={() => setOperation('!')} />
            <Button disabled={error} label="mod" bt-type="operation" onClick={() => setOperation('%')} />
          </>
        )}
        <Button disabled={error} label="1/&#x1D465;" bt-type="operation" onClick={() => setOperation('fractal')} />
        <Button disabled={error} label="&#x1D465;²" bt-type="operation" onClick={() => setOperation('pow')} />
        <Button disabled={error} label="&#x221A;" bt-type="operation" onClick={() => setOperation('sqrt')} />
        <Button disabled={error} label="&#xf7;" bt-type="operation" onClick={() => setOperation('/')} />
        <Button disabled={error} label="7" bt-type="number" onClick={() => addCharacter(7)} />
        <Button disabled={error} label="8" bt-type="number" onClick={() => addCharacter(8)} />
        <Button disabled={error} label="9" bt-type="number" onClick={() => addCharacter(9)} />
        <Button disabled={error} label="&#xd7;" bt-type="operation" onClick={() => setOperation('*')} />
        <Button disabled={error} label="4" bt-type="number" onClick={() => addCharacter(4)} />
        <Button disabled={error} label="5" bt-type="number" onClick={() => addCharacter(5)} />
        <Button disabled={error} label="6" bt-type="number" onClick={() => addCharacter(6)} />
        <Button disabled={error} label="-" bt-type="operation" onClick={() => setOperation('-')} />
        <Button disabled={error} label="1" bt-type="number" onClick={() => addCharacter(1)} />
        <Button disabled={error} label="2" bt-type="number" onClick={() => addCharacter(2)} />
        <Button disabled={error} label="3" bt-type="number" onClick={() => addCharacter(3)} />
        <Button disabled={error} label="+" bt-type="operation" onClick={() => setOperation('+')} />
        <Button disabled={error} label="&#xB1;" bt-type="number" onClick={() => setOperation('-')} />
        <Button disabled={error} label="0" bt-type="number" onClick={() => addCharacter(0)} />
        <Button disabled={error} label="," bt-type="number" onClick={() => addCharacter('.')} />
        <Button disabled={error} label="&#x3d;" bt-type="equal" onClick={() => setOperation('=')} />
      </Calculator>
    </main>
  );
}

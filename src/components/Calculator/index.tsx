"use client";

import { useEffect, useMemo } from "react";

import { Button } from "../Button";

import { useCalculator } from "@/contexts/Calculator";
import { factorialize, termialize } from "@/utils";

export function Calculator() {
  const { display, setDisplay } = useCalculator();

  const isError = useMemo(() => display === 'Erro', [display]);
  const LAST_CHARACTER = String(display.at(-1));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Backspace':
          return erase();
        case 'Enter':
          return showResult();
        case 'Escape':
        case 'Delete':
          return clearDisplay();
        case '(':
          return addCharacter('(');
        case ')':
          return addCharacter(')');
        case '/':
          return addCharacter('/');
        case '+':
          return addCharacter('+');
        case '-':
          return addCharacter('-');
        case '*':
          return addCharacter('*');
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
        case '?':
          return operationCalculate('?');
        case '!':
          return operationCalculate('!');
        case 'Dead':
          return addCharacter('^');
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  });

  function clearDisplay() {
    setDisplay("");
  }

  function erase() {
    setDisplay(prev => prev.slice(0, -1));
  }

  function addCharacter(character: string) {
    const validOperations = "/*-+.".split("");

    const lastNumberInDisplay = display.split(/[\-\+\/\*]/g).at(-1) ?? '0';
    const lastCharacterIsOperation = validOperations.includes(character) && validOperations.includes(LAST_CHARACTER);

    if (
      (lastCharacterIsOperation) ||
      (character === '.' && lastNumberInDisplay.includes('.'))
    ) return;

    setDisplay(prev => prev + character);
  }

  function basicCalculate(value: string) {
    try {
      const total = eval(value.replaceAll("^", "**"));

      return setDisplay(total.toString());
    } catch (error) {
      return setDisplay("Erro");
    }
  }

  function showResult() {
    const countOpenParentesis = display.split("(").length - 1;
    const countCloseParentesis = display.split(")").length - 1;

    if (display.includes("(") && countOpenParentesis !== countCloseParentesis) {
      return basicCalculate(display + ")".repeat(countOpenParentesis - countCloseParentesis));
    }

    return basicCalculate(display);
  }

  function operationCalculate(operation: string) {
    const displayValue = Number(display);

    switch (operation) {
      case 'sqrt':
        return basicCalculate(String(Math.sqrt(displayValue)));
      case '!':
        return basicCalculate(String(factorialize(displayValue)));
      case '?':
        return basicCalculate(String(termialize(displayValue)));
    }
  }

  return (
    <>
      <Button
        label="C"
        variant="operation"
        onClick={clearDisplay}
      />
      <Button
        label="&#x1D465;&#x207F;"
        variant="operation"
        onClick={() => addCharacter("^")}
        disabled={isError}
      />
      <Button
        label="&#x1D45B;?"
        variant="operation"
        onClick={() => operationCalculate('?')}
        disabled={isError}
      />
      <Button
        label="&#x1D45B;!"
        variant="operation"
        onClick={() => operationCalculate('!')}
        disabled={isError}
      />

      <Button
        label="("
        variant="operation"
        onClick={() => addCharacter('(')}
        disabled={isError}
      />
      <Button
        label=")"
        variant="operation"
        onClick={() => addCharacter(')')}
        disabled={isError}
      />
      <Button
        label="&#x221A;"
        variant="operation"
        onClick={() => operationCalculate('sqrt')}
        disabled={isError}
      />
      <Button
        label="&#xf7;"
        variant="operation"
        onClick={() => addCharacter('/')}
        disabled={isError}
      />

      <Button
        label="7"
        variant="number"
        onClick={() => addCharacter('7')}
        disabled={isError}
      />
      <Button
        label="8"
        variant="number"
        onClick={() => addCharacter('8')}
        disabled={isError}
      />
      <Button
        label="9"
        variant="number"
        onClick={() => addCharacter('9')}
        disabled={isError}
      />
      <Button
        label="&#xd7;"
        variant="operation"
        onClick={() => addCharacter('*')}
        disabled={isError}
      />

      <Button
        label="4"
        variant="number"
        onClick={() => addCharacter('4')}
        disabled={isError}
      />
      <Button
        label="5"
        variant="number"
        onClick={() => addCharacter('5')}
        disabled={isError}
      />
      <Button
        label="6"
        variant="number"
        onClick={() => addCharacter('6')}
        disabled={isError}
      />
      <Button
        label="-"
        variant="operation"
        onClick={() => addCharacter('-')}
        disabled={isError}
      />

      <Button
        label="1"
        variant="number"
        onClick={() => addCharacter('1')}
        disabled={isError}
      />
      <Button
        label="2"
        variant="number"
        onClick={() => addCharacter('2')}
        disabled={isError}
      />
      <Button
        label="3"
        variant="number"
        onClick={() => addCharacter('3')}
        disabled={isError}
      />
      <Button
        label="+"
        variant="operation"
        onClick={() => addCharacter('+')}
        disabled={isError}
      />

      <Button
        label="0"
        variant="number"
        onClick={() => addCharacter('0')}
        disabled={isError}
      />
      <Button
        label=","
        variant="number"
        onClick={() => addCharacter('.')}
        disabled={isError}
      />
      <Button
        label={<span className="material-symbols-outlined">backspace</span>}
        variant="number"
        onClick={erase}
        disabled={isError}
      />
      <Button
        label="&#x3d;"
        variant="equal"
        onClick={showResult}
        disabled={isError}
      />
    </>
  );
};
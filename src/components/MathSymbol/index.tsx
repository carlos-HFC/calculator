import { useMemo } from "react";

interface MathSymbolProps {
  type: 'fract' | 'sqrt' | 'pow';
}

export function MathSymbol(props: MathSymbolProps) {
  const operation = useMemo(() => {
    switch (props.type) {
      case "fract":
        return (
          <mfrac>
            <mi>1</mi>
            <mn>x</mn>
          </mfrac>
        );
      case "sqrt":
        return (
          <msqrt>
            <mi>x</mi>
          </msqrt>
        );
      case "pow":
        return (
          <msup>
            <mi>x</mi>
            <mn>2</mn>
          </msup>
        );
    }
  }, []);

  return (
    <math>
      {operation}
    </math>
  );
}
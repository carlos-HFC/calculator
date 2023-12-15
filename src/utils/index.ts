export function factorialize(value: number): number {
  if (value < 0) return -1;
  if (value === 0) return 1;

  return (value * factorialize(value - 1));
}

export function termialize(value: number): number {
  if (value === 0) return 0;

  return (value * (value + 1)) / 2;
}
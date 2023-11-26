export const getArea = (radio: number) => {
  if (radio < 0) {
    throw new Error("O raio deve ser positivo!");
  }
  const PI = parseFloat(Math.PI.toFixed(5));
  return parseFloat((PI * Math.pow(radio, 2)).toFixed(4));
};

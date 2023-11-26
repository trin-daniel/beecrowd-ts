import assert from "node:assert";

import { describe, it } from "node:test";
import { getArea } from "./main";

describe("Bee1002", () => {
  it("Deve retorna a area da circunferência valendo 12.5664, quando especificado 2.0 como raio", () => {
    const radio = 2.0;
    const expected = 12.5664;
    assert.deepStrictEqual(getArea(radio), expected);
  });
  it("Deve retorna a area da circunferência valendo 31819.3103, quando especificado 100.64 como raio", () => {
    const radio = 100.64;
    const expected = 31819.3103;
    assert.deepStrictEqual(getArea(radio), expected);
  });
  it("Deve retorna a area da circunferência valendo 70685.7750, quando especificado 150.00 como raio", () => {
    const radio = 100.64;
    const expected = 31819.3103;
    assert.deepStrictEqual(getArea(radio), expected);
  });
  it("Deve lançar um erro quando o raio fornecido não é um valor válido", () => {
    assert.throws(() => getArea(-2), new Error("O raio deve ser positivo!"));
  });
});

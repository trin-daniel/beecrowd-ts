import assert from "node:assert";

import { describe, it } from "node:test";
import { sum } from "./main";

describe("bee1003", () => {
  it("Deve retornar 40, quando somado a=30 e b=10, ou a=10 e b=30", () => {
    const expected = 40;
    assert.deepStrictEqual(sum(30, 10), expected);
  });
  it("Deve retornar -20, quando somado a=-30 e b=10, ou a=10 e b=-30", () => {
    const expected = -20;
    assert.deepStrictEqual(sum(-30, 10), expected);
  });
  it("Deve retornar 0, quando somado a=0 e b=0", () => {
    const expected = 0;
    assert.deepStrictEqual(sum(0, 0), expected);
  });
});

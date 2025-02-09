import { Vector } from "$lib/math";

const makeVector = () => {
  return new Vector(1, 2);
};

const asyncMakeVector = async () => {
  return new Vector(1, 2);
};

export const load = (event) => {
  const vector = makeVector();
  const vectorPromise = asyncMakeVector();

  return { vector, vectorPromise };
};


import { representAdjacencies } from "./representAdjacencies";
import { Node } from './graph'

describe("representAdjacencies", () => {
  it("correctly represents adjacent nodes in a map", () => {
    const a: Node<any, any> = {
      value: "a",
      edges: []
    };
    const b: Node<any, any> = {
      value: "b",
      edges: []
    };
    const c: Node<any, any> = {
      value: "c",
      edges: []
    };
    const nodes = [a, b, c];
    const adjacencies = [
      [false, true, false],
      [false, false, true],
      [true, false, false],
    ]
    const result = representAdjacencies(nodes, adjacencies)

    expect(result.get(a)![0]).toEqual(b)
    expect(result.get(b)![0]).toEqual(c)
    expect(result.get(c)![0]).toEqual(a)
  });
});

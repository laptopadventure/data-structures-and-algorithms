import { Stack } from "./stack";

describe("Stack", () => {
  it("can push", () => {
    const s = new Stack<string>();

    expect(() => s.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });
  it("can peek and size correctly at an empty stack", () => {
    const emptyStack = new Stack<string>();
    expect(emptyStack.peek).toBe(undefined);
    expect(emptyStack.size).toBe(0);
  });
});

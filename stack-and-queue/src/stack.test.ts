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
  it("can pop off a stack", () => {
    const stack = new Stack<string>();

    stack.push("Phoebe");
    stack.push("Arthur");
    const popped = stack.pop();

    expect(popped).toBe("Arthur");
  });
  it("can empty a stack after multiple pops", () => {
    const stack = new Stack<string>();

    stack.push("Phoebe");
    stack.push("Arthur");
    stack.pop();
    stack.pop();

    expect(stack.size).toBe(0);
  });
  it("can peek at something on the stack", () => {
    const stack = new Stack<string>();

    stack.push("Phoebe");
    stack.push("Arthur");

    expect(stack.peek).toBe("Arthur");
  });
  it("can instantiate an empty stack", () => {
    const stack = new Stack<string>();

    expect(stack).toBeTruthy();
  });
  it("popping or peeking an empty stack raises exceptions", () => {
    const stack = new Stack<string>();

    expect(() => {
      stack.pop();
    }).toThrow("Nothing to pop off the stack!");
    expect(() => {
      stack.peek;
    }).toThrow("Nothing to peek at on the stack!");
  });
});

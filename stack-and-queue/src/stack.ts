export class Stack<T> {
  stack: T[] = [];

  get size(): number {
    return this.stack.length;
  }

  get peek(): T {
    const peeked = this.stack[this.stack.length - 1];
    if (!peeked) {
      throw new Error("Nothing to peek at on the stack!");
    }
    return peeked;
  }

  push(pushed: T): void {
    this.stack.push(pushed);
  }

  pop(): T {
    const popped = this.stack.pop();
    if (!popped) {
      throw new Error("Nothing to pop off the stack!");
    }
    return popped;
  }
}

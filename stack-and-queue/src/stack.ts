export class Stack<T> {
  stack: T[] = [];

  get size(): number {
    return this.stack.length;
  }

  get peek(): T {
    return this.stack[this.stack.length - 1];
  }

  push(pushed: T): void {
    this.stack.push(pushed);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }
}

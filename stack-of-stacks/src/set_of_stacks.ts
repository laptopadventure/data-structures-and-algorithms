export class SetOfStacks<T> {
  constructor(private readonly maxHeight: number) {}

  stackArray: Stack<T>[] = [];

  // returns a stack. if `createNewStack` is set, it will create stacks to accomodate,
  // otherwise throwing an error.
  private getStack(createNewStack: boolean): Stack<T> {
    let targetStack = this.stackArray[this.stackArray.length - 1];
    // no stack in array
    if (!targetStack) {
      if (createNewStack) {
        targetStack = new Stack<T>(this.maxHeight);
        this.stackArray.push(targetStack);
      } else {
        throw new Error("Can't do that to an empty SetOfStacks.");
      }
    }
    // full stack in array
    if (targetStack.size === this.maxHeight && createNewStack) {
      targetStack = new Stack<T>(this.maxHeight);
      this.stackArray.push(targetStack);
    }
    return targetStack;
  }

  push(pushed: T): void {
    const targetStack = this.getStack(true);
    targetStack.push(pushed);
  }

  pop(): T {
    const targetStack = this.getStack(false);
    const item = targetStack.pop();
    if (!item) {
      throw new Error("Nothing to pop!");
    }
    if (!targetStack.size) {
      this.stackArray.pop();
    }
    return item;
  }

  get peek(): T {
    const targetStack = this.getStack(false);
    const item = targetStack.peek;
    if (item === undefined) {
      throw new Error("Nothing to peek!");
    }
    return item;
  }

  // BONUS QUESTION
  get size(): number {
    let len = 0;
    for (let stack of this.stackArray) {
      len += stack.size;
    }
    return len;
  }
}

class Stack<T> {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) {}

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr.at(-1);
  }

  get size(): number {
    return this._arr.length;
  }
}

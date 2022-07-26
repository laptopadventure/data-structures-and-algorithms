import { Collection, display } from "./Collection";

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;

  insert(item: T) {
    const newNode: Node<T> = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }

  includes(target: T): boolean {
    let iteratorNode = this.start;
    if (!iteratorNode) {
      return false;
    }
    while (iteratorNode.next) {
      if (iteratorNode.item === target) {
        return true;
      }
      iteratorNode = iteratorNode.next;
    }
    return false;
  }

  toString(): string {
    let iteratorNode = this.start;
    if (!iteratorNode) {
      return "NULL";
    }
    let returned = "";
    while (iteratorNode) {
      returned += `{ ${display(iteratorNode.item)} } -> `;
      iteratorNode = iteratorNode.next;
    }
    returned += "NULL";
    return returned;
  }
}

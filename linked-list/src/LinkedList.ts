import { Collection, display } from "./Collection";

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined;
  last: Node<T> | undefined;
  length = 0;

  insert(item: T) {
    const newNode: Node<T> = {
      item: item,
      next: this.start,
    };
    if (!this.start) {
      //let's have a reference to the first newNode created for the end of our list
      this.last = newNode;
    }
    this.start = newNode;
    this.length++;
  }

  append(item: T) {
    let lastNode = this.start;
    if (!lastNode) {
      this.insert(item);
      return;
    }
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    const newNode: Node<T> = {
      item: item,
      next: undefined,
    };
    lastNode.next = newNode;
    this.last = newNode;
    this.length++;
  }

  insertBefore(followingItem: T, item: T): boolean {
    let tracker = this.start;
    if (!tracker) {
      return false;
    }
    while (tracker.next) {
      let followingNode = tracker.next;
      if (followingNode.item !== followingItem) {
        continue;
      }
      const newNode: Node<T> = {
        item: item,
        next: followingNode,
      };
      tracker.next = newNode;
      return true;
    }
    return true;
  }

  insertAfter(previousItem: T, item: T): boolean {
    let previousNode = this.start;
    if (!previousNode) {
      return false;
    }
    while (previousNode.next) {
      if (previousNode.item !== previousItem) {
        previousNode = previousNode.next;
        continue;
      }
      let afterPrevious = previousNode.next;
      const newNode: Node<T> = {
        item: item,
        next: afterPrevious,
      };
      previousNode.next = newNode;
      return true;
    }
    return false;
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
      return "EMPTY";
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

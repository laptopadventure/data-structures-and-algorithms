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
    let lastNode = this.last;
    if (!lastNode) {
      this.insert(item);
      return;
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
  kthFromEnd(k: number): T | undefined {
    let distanceToTarget = this.length - k - 1;
    if (!this.start) {
      return undefined;
    }
    let tracker = this.start;
    while (distanceToTarget) {
      if (!tracker.next) {
        break;
      }
      distanceToTarget--;
      tracker = tracker.next;
    }
    return !distanceToTarget ? tracker.item : undefined;
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

export function zipLists<T1, T2>(
  list1: LinkedList<T1>,
  list2: LinkedList<T2>
): LinkedList<T1 | T2> {
  const zipped = new LinkedList<T1 | T2>();
  let tracker1 = list1.start;
  if (!tracker1) {
    return list2;
  }
  let tracker2 = list2.start;
  if (!tracker2) {
    return list1;
  }
  let flopper = true;
  let stepsLeft = list1.length + list2.length;
  while (stepsLeft) {
    stepsLeft--;
    flopper = !flopper;
    if (flopper) {
      zipped.insert(tracker1.item);
      if (tracker1.next) {
        tracker1 = tracker1.next;
      }
    } else {
      zipped.insert(tracker2.item);
      if (tracker2.next) {
        tracker2 = tracker2.next;
      }
    }
  }
  return zipped;
}

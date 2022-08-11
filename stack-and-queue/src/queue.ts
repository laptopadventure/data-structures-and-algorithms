export class Queue<T> {
  queue: T[] = [];

  get size(): number {
    return this.queue.length;
  }

  get peek(): T {
    const peeked = this.queue[0];
    if (!peeked) {
      throw new Error("Nothing to peek at!");
    }
    return peeked;
  }

  enqueue(enqueued: T): void {
    this.queue.push(enqueued);
  }

  dequeue(): T {
    const dequeued = this.queue.shift();
    if (!dequeued) {
      throw new Error("Nothing to dequeue!");
    }
    return dequeued;
  }
}

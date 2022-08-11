export class Queue<T> {
  queue: T[] = [];

  get size(): number {
    return this.queue.length;
  }

  get peek(): T {
    return this.queue[0];
  }

  enqueue(enqueued: T): void {
    this.queue.push(enqueued);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }
}

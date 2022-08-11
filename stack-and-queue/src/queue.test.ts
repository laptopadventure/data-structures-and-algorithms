import { Queue } from "./queue";

describe("Queue", () => {
  it("can enqueue", () => {
    const q = new Queue<string>();

    expect(() => q.enqueue("Frodo")).not.toThrow();
  });

  it("enqueues", () => {
    const q = new Queue<string>();

    q.enqueue("Frodo");
    q.enqueue("Sam");

    expect(q.size).toBe(2);
    expect(q.peek).toBe("Frodo");
  });
  it("can dequeue out of a queue the expected value", () => {
    const queue = new Queue<string>();

    queue.enqueue("Phoebe");
    queue.enqueue("Arthur");

    expect(queue.dequeue()).toBe("Phoebe");
    expect(queue.size).toBe(1);
  });
  it("can peek into a queue, seeing the expected value", () => {
    const queue = new Queue<string>();

    queue.enqueue("Phoebe");
    queue.enqueue("Arthur");

    expect(queue.peek).toBe("Phoebe");
  });
  it("can empty a queue after multiple dequeues", () => {
    const queue = new Queue<string>();

    queue.enqueue("Phoebe");
    queue.enqueue("Arthur");

    queue.dequeue();
    queue.dequeue();

    expect(queue.size).toBe(0);
  });
  it("can instantiate an empty queue", () => {
    const queue = new Queue<string>();

    expect(queue).toBeTruthy();
  });
  it("can raise exception on peeking or dequeuing an empty queue", () => {
    const queue = new Queue<string>();

    expect(() => {
      queue.peek;
    }).toThrow("Nothing to peek at!");
    expect(() => {
      queue.dequeue();
    }).toThrow("Nothing to dequeue!");
  });
});

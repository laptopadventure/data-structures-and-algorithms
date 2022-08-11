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
  it("can dequeue and size an empty queue", () => {
    const queue = new Queue<any>();

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size).toBe(0);
  });
});

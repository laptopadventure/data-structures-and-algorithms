import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

// WELL okay maybe I didn't write tests this time around but hey I was having too much fun with the ts don't judge me

describe("linked list", () => {
  it("runs my custom test", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();
  });
});

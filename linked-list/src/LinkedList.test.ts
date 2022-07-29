import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("runs custom tests", () => {
    //it is defined
    const list: LinkedList<string> = new LinkedList<string>();
    expect(list).toBeDefined();
    //it logs empty lists correctly
    expect(list.toString()).toBe("EMPTY");
    //it can insert & includes works
    list.insert("Jimmy");
    list.insert("Tammy");
    list.insert("Phoebe");
    expect(list.includes("Tammy")).toBe(true);
    //it logs nonempty lists correctly
    expect(list.toString()).toBe(
      "{ Phoebe } -> { Tammy } -> { Jimmy } -> NULL"
    );
    //it can insert before an item
    //length works
    expect(list.length).toBe(3);
  });
});

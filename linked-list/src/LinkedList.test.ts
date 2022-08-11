import { LinkedList, zipLists } from "./LinkedList";

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
  it("can get kth position from end", () => {
    const list: LinkedList<string> = new LinkedList<string>();
    list.insert("Pippa");
    // Where the linked list is of a size 1
    expect(list.kthFromEnd(0)).toBe("Pippa");
    list.insert("Lilian");
    list.insert("Dylan");
    //“Happy Path” where k is not at the end, but somewhere in the middle of the linked list
    expect(list.kthFromEnd(1)).toBe("Lilian");
    //Where k and the length of the list are the same, kinda
    expect(list.kthFromEnd(2)).toBe("Dylan");
    //where k is greater than the length of the linked list
    expect(list.kthFromEnd(3)).toBe(undefined);
    //Where k is not a positive integer
    expect(list.kthFromEnd(-1)).toBe(undefined);
  });
  it("can zip", () => {
    const list1: LinkedList<string> = new LinkedList<string>();
    list1.insert("Jimmy");
    list1.insert("Tammy");
    list1.insert("Phoebe");
    const list2: LinkedList<string> = new LinkedList<string>();
    list2.insert("Pippa");
    list2.insert("Lilian");
    list2.insert("Dylan");
    const zipped = zipLists(list1, list2);
    expect(zipped.toString()).toBe(
      "{ Jimmy } -> { Pippa } -> { Tammy } -> { Lilian } -> { Phoebe } -> { Dylan } -> NULL"
    );
  });
});

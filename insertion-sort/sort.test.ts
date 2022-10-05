
import insertionSort from "./sort";

describe("Insertion Sort", () => {
  it("sorts", () => {
    const input = [8, 4, 23, 42, 16, 15]
    insertionSort(input);
    expect(input).toEqual([4, 8, 15, 16, 23, 42])
  })
})

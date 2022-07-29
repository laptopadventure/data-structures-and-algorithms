# Collection: Linked List

[Assignment instructions](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/LAB)

## Challenge

For code challenge 5, I had to create the linked list class from nothing, and

## Approach & Efficiency

I chose to implement this.last to help with appending, insertBefore and insertAfter are very similar, but with small differences.
this.last helped optimize the append() method, and keeping insertBefore and insertAfter samey while changing the strict difference of if the code checked is on the node iterating or if its on the next node from the node iterating achieved quite readable code.

BigO notation should be O(c) for methods I was able to use an optimization for, and O(n) otherwise.

## API

- insert(item)
  - Adds a node containing the item to the front of the list.
  - No return
- append(item)
  - Adds a node containing the item to the end of the list.
  - No return
- insertBefore(followingItem, item)
  - Adds a node containing the item after the node containing followingItem.
  - returns boolean on how successful it was
- insertAfter(previousItem, item)
  - Adds a node containing the item before the node containing previousItem.
  - returns boolean on how successful it was
- includes(item)
  - returns boolean on whether item was in the linked list.
- toString()
  - returns a human-readable string of the linked list.

## TypeScript Instructions

- Verify your types are correct with `npm run check`
- Verify your implementation is correct with `npm run test`
  - When converting the value in a node to a string, use the `display` function in [`Collection.ts`](./src/Collection.ts).
- DO NOT edit [assignment.test.ts](./src/).
- Add your own tests to [LinkedList.test.ts](./src/LinkedList.test.ts).
- Tests must pass the github workflow for full credit.

## TypeScript resources

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Common Types

- `boolean` is `true` or `false`.
- `number` is any JavaScript number - `5`, `-17`, `22.356`, `3/10`, `Number.MAX_VALUE`, etc.
- `string` is any JavaScript string - `'hello'`, `'goodbye'`, `\`I am ${age}\``
- `interface Person { name: string; age: number; }` is a JavaScript object with two properties, `name` and `age`. `name` must be a string, and `age` must be a number.
- `(name: string, age: number) => Person` is a function with two parameters, `name` (a string) and `age` (a number), which will return an object of type `Person`.
- `() => void` is a function with no arguments, and returns nothing.
  <!-- - `'hello'`' is the JavaScript string `'hello'` and no other string. -->
  <!-- - `'hello'|'goodbye'` is either the JavaScript string `'hello'` or the string `'goodbye'`, and no other strings. -->

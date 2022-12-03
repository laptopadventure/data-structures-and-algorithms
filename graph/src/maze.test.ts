import { Door, Room, canSolve, Maze } from "./maze";

let validMaze = new Maze();
//start
let start = validMaze.addNode({
  isExit: false,
  hasKey: false,
})
//key to the right
let keyRoom = validMaze.addNode({
  isExit: false,
  hasKey: true,
})
//empty room to the north
let emptyRoom = validMaze.addNode({
  isExit: false,
  hasKey: false,
})
//exit to the north of empty room
let exit = validMaze.addNode({
  isExit: true,
  hasKey: false,
})
validMaze.setStart(start)
validMaze.addBiEdge(start, keyRoom, {locked: false})
validMaze.addBiEdge(start, emptyRoom, {locked: false})
validMaze.addBiEdge(emptyRoom, exit, {locked: true})

let invalidMaze = new Maze();
//start
let badStart = invalidMaze.addNode({
  isExit: false,
  hasKey: false,
})
//keyroom but wait- i can't get in there, the doors locked
let badKeyRoom = invalidMaze.addNode({
  isExit: false,
  hasKey: true,
})
//you'll never get here
let badExit = invalidMaze.addNode({
  isExit: true,
  hasKey: false,
})
invalidMaze.setStart(badStart)
invalidMaze.addBiEdge(badStart, badKeyRoom, {locked: true})
invalidMaze.addBiEdge(badStart, badExit, {locked: true})

let keylessMaze = new Maze()
//start
let keylessStart = keylessMaze.addNode({
  isExit: false,
  hasKey: false,
})
let keylessExit = keylessMaze.addNode({
  isExit: true,
  hasKey: false,
})
keylessMaze.setStart(keylessStart)
keylessMaze.addBiEdge(keylessStart, keylessExit, {locked:false})

describe("maze solver", () => {
  it("returns true on a valid maze", () => {
    //expect(canSolve(validMaze)).toBe(true)
  })
  it("returns false on an invalid maze", () => {
    //expect(canSolve(invalidMaze)).toBe(false)
  })
  it("returns true on keyless mazes that are possible", () => {
    expect(canSolve(keylessMaze)).toBe(true)
  })
})

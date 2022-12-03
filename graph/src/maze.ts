import { Graph, Node } from "./graph";

export type Room = {
  isExit: Boolean,
  hasKey: Boolean,
}

export type Door = {
  locked: Boolean,
}

export class Maze extends Graph<Room, Door> {
  start?: Node<Room, Door>

  setStart(node: Node<Room, Door>) {
    this.start = node
  }
}

export function canSolve(maze: Maze): boolean {
  //function that helps us find things
  function findParameter(propertyWanted: keyof Room, bypassLocked: boolean): boolean {
    const seenSet = new Set();
    const shouldSee = [maze.start];
    while(shouldSee.length > 0) {
      const node = shouldSee.shift()!;
      //found it! the key, the exit, something we wanted
      if(node.value[propertyWanted as keyof Room]) {
        return true;
      }
      seenSet.add(node)
      for(const edge of node.edges) {
        if(edge.value.locked && !bypassLocked) {
          continue;
        }
        const foundNode = edge.nodes[1];
        if(seenSet.has(foundNode) || shouldSee.includes(foundNode)) {
          continue;
        }
        shouldSee.push(foundNode);
      }
    }
    return false;
  }
  //see if we even need a key
  if(findParameter("isExit", false)) {
    return true;
  }
  //so we need a key
  //if we can't find the key without going through a locked door,
  //then it's not valid
  if(!findParameter("hasKey", false)) {
    return false;
  }
  //now search for the exit, by passing locked doorss
  return findParameter("isExit", true)
}


import { Node } from "./graph";

export function representAdjacencies<NV, EV>(nodes: Node<NV, EV>[], neighborMatrix: boolean[][]): Map<Node<NV, EV>, Node<NV, EV>[]> {
  const adjacencies = new Map<Node<NV, EV>, Node<NV, EV>[]>()
  nodes.forEach((node, i) => {
    const nodeAdjArr: Node<NV, EV>[] = []
    const targetArr = neighborMatrix[i];
    targetArr.forEach((bool, j) => {
      if(bool) {
        nodeAdjArr.push(nodes[j])
      }
    });
    adjacencies.set(node, nodeAdjArr)
  });
  return adjacencies;
}

export interface Node<NV, EV> {
  value: NV;
  edges: Edge<NV, EV>[];
}

export interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
}

export function neighbors(origin: Node<Airport, Route>): Set<Node<Airport, Route>> {

}

export class Graph<NV, EV> {
  private nodes: Node<NV, EV>[] = [];

  addNode(value: NV): Node<NV, EV> {
    const newNode: Node<NV, EV> = {
      value: value,
      edges: [],
    }
    this.nodes.push(newNode)
    return newNode;
  }

  addEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV): void {
    const newEdge: Edge<NV, EV> = {
      value: value,
      nodes: [a, b]
    };
    a.edges.push(newEdge);
    b.edges.push(newEdge);
  }

  getNodes(): Node<NV, EV>[] {
    return this.nodes;
  }

  neighbors(node: Node<NV, EV>): Set<Node<NV, EV>> {
    const neighborsWithDupes = node.edges.map((edge) => edge.nodes[1]);
    return new Set(neighborsWithDupes);
  }

  size(): number {
    return this.nodes.length;
  }
}

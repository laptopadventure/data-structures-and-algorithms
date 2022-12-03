export interface Node<NV, EV> {
  value: NV;
  edges: Edge<NV, EV>[];
}

export interface Edge<NV, EV> {
  value: EV;
  nodes: [Node<NV, EV>, Node<NV, EV>];
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
  }

  addBiEdge(a: Node<NV, EV>, b: Node<NV, EV>, value: EV) {
    const A2B: Edge<NV, EV> = {
      value: value,
      nodes: [a, b]
    };
    const B2A: Edge<NV, EV> = {
      value: value,
      nodes: [b, a]
    };
    a.edges.push(A2B);
    b.edges.push(B2A);
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

  breadthFirst(topNode: Node<NV, EV>): NV[] {
    const seenMap = new Map();
    const shouldSee = [topNode];
    while(shouldSee.length) {
      const node = shouldSee.shift() as Node<NV, EV>;
      seenMap.set(node, node.value);
      for(const edge of node.edges) {
        const foundNode = edge.nodes[1];
        if(seenMap.has(foundNode) || shouldSee.includes(foundNode)) {
          continue;
        }
        shouldSee.push(foundNode);
      }
    }
    return Array.from(seenMap.values());
  }
}

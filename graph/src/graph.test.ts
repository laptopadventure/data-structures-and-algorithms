
import { Node, Edge, Graph } from './graph'

interface Airport {
  code: string;
}

interface Route {
  time: number;
}

let graph = new Graph<Airport, Route>();

describe("graph", () => {
  let sea: Node<Airport, Route>;
  let ord: Node<Airport, Route>;
  it("can add nodes", () => {
    sea = graph.addNode({ code: "SEA" });
    ord = graph.addNode({ code: "ORD" });
    expect(sea).toMatchObject<Node<Airport, Route>>({
      value: { code: "SEA" },
      edges: []
    })
  })
  it("can add edges", () => {
    graph.addEdge(sea, ord, { time: 1000 });
    graph.addEdge(sea, ord, { time: 1200 });
    graph.addEdge(ord, sea, { time: 1100 });
    expect(sea.edges).toHaveLength(3);
    expect(sea.edges[0]).toMatchObject<Edge<Airport, Route>>({
      value: { time: 1000 },
      nodes: [sea, ord]
    })
  })
  it("can get neighbors", () => {
    let setValues = Array.from(graph.neighbors(sea));

    expect(setValues).toContain(sea);
    expect(setValues).toContain(ord);
  })
  it("can get nodes", () => {
    const nodes = graph.getNodes();

    expect(nodes).toContain(sea);
    expect(nodes).toContain(ord);
  })
  it("can get size", () => {
    expect(graph.size()).toBe(2)
  })
})

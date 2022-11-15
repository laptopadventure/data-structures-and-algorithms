
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
  let mia: Node<Airport, Route>;
  let lga: Node<Airport, Route>;
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
    expect(sea.edges).toHaveLength(2);
    expect(sea.edges[0]).toMatchObject<Edge<Airport, Route>>({
      value: { time: 1000 },
      nodes: [sea, ord]
    })
  })
  it("can get neighbors", () => {
    let setValues = Array.from(graph.neighbors(sea));

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
  it("can get breadth first", () => {
    //add some new stuff to make the breadth complex
    mia = graph.addNode({ code: "MIA" });
    lga = graph.addNode({ code: "LGA" });
    //connect em. sea goes to ord, ord goes to mia, mia goes to lga
    //lga to ord should disregard because it is already seen
    graph.addEdge(ord, mia, { time: 1000 })
    graph.addEdge(mia, lga, { time: 1100 })
    graph.addEdge(lga, ord, { time: 1200 })
    expect(graph.breadthFirst(sea)).toStrictEqual([sea.value, ord.value, mia.value, lga.value])
  })
})

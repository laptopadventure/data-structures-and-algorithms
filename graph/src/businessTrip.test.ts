import { Graph } from './graph'
import businessTrip from './businessTrip'

let graph = new Graph<string, number>();
//nodes
let a = graph.addNode("Point A");
let b = graph.addNode("Point B");
let c = graph.addNode("Point C");
//no way to Point D
let d = graph.addNode("Point Disconnected");
//edges
graph.addEdge(a, b, 13);
graph.addEdge(b, c, 20);
graph.addEdge(c, a, 35);
graph.addEdge(a, c, 999);

describe("businessTrip", () => {
  it("returns cost on correct trips", () => {
    expect(businessTrip([a, b, c])).toBe(33);
    expect(businessTrip([a, c])).toBe(999);
  })
  it("returns null on incorrect trips", () => {
    expect(businessTrip([a, d])).toBeNull();
    expect(businessTrip([a, c, a, b, c, d])).toBeNull();
  })
})

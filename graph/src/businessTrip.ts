import { Node } from './graph'

export default function businessTrip(travelPlan: Node<string, number>[]): number|null {
  //sanity
  if(!travelPlan.length) {
    return null; //no start destination
  }
  if(travelPlan.length === 1) {
    return 0; //no END destination
  }
  //copy to avoid mutating the input
  const plan = [...travelPlan];
  let totalCost = 0;
  while(plan.length > 1) {
    let currentLocation = plan.shift()!;
    let destination = plan[0];
    let found = false;
    for(let edge of currentLocation.edges) {
      if(edge.nodes[1] === destination) {
        totalCost += edge.value
        found = true;
        break;
      }
    }
    if(!found) {
      return null;
    }
  }
  return totalCost;
}

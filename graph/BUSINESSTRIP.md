# Graphs - Business Trip
Implement the businessTrip function.

## Whiteboard

![whiteboard](./businesstrip.png)

## Challenge

Write a function called businessTrip that takes an array of city names, and returns the cost of the trip if it’s possible, or null if it’s not.

## Approach & Efficiency

Well, if the input has all the locations we need to go to, we just need to test if it’s valid, really. So we can start at the node that is the start location, and check its neighbors for the next location, and check that’s neighbors, so on and so forth until you get where you want to go. Only, you probably don’t want to use neighbors because you need to add on the edge’s value.

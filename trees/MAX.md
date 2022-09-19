# Max

## Whiteboard

![whiteboard](./max-whiteboard.png)

## Approach

I want two solutions for this, because I find one of the two solutions very boring.

For my first solution, I could simply return the tree inOrder as an array, and pick the highest value in that array and return it.

For my second solution, If the tree has been sorted properly by add() I could follow the crumb trail of the biggest node, until I have reached a dead end and, assumingely, the highest number.

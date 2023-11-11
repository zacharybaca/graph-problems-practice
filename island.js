function getNeighbors(row, col, graph) {
    const neighbors = [];
    // Up
    if (row > 0 && graph[row - 1][col] === 1) {
        neighbors.push([row - 1, col])
    }
    // Down
    if (row < graph.length - 1 && graph[row + 1][col] === 1) {
        neighbors.push([row + 1, col])
    }
    // Left
    if (col > 0 && graph[row][col - 1] === 1) {
        neighbors.push([row, col - 1])
    }
    // Right
    if (col < graph[0].length - 1 && graph[row][col + 1] === 1) {
        neighbors.push([row, col + 1])
    }

    return neighbors
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${row, col}`);
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let currNode = stack.pop();
    const [row, col] = currNode;
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    let neighbors = getNeighbors(row, col, graph);
    for (let neighbor of neighbors) {
      if (!visited.has(`${neighbor}`)) {
        visited.add(`${neighbor}`);
        stack.push(neighbor);
      }
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }
  // return size
  return size - 1;
}

module.exports = [getNeighbors, islandSize];

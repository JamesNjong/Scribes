/**
 *  1. Pathfinding (Dijkstra's Algorithm)
 * 
 * Given a map represented by a grid and two points (start and end), find the shortest path between them.
 * 
 */

function dijkstra(graph, start, end) {
    const distances = {};
    const visited = {};
    const previous = {};
  
    // Initialize distances and visited nodes
    for (const node in graph) {
      distances[node] = Infinity;
      visited[node] = false;
    }
  
    distances[start] = 0;
  
    // Main loop
    while (!visited[end]) {
      let minDistance = Infinity;
      let closestNode = null;
  
      for (const node in distances) {
        if (!visited[node] && distances[node] < minDistance) {
          minDistance = distances[node];
          closestNode = node;
        }
      }
  
      visited[closestNode] = true;
  
      for (const neighbor in graph[closestNode]) {
        const newDistance = distances[closestNode] + graph[closestNode][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          previous[neighbor] = closestNode;
        }
      }
    }
  
    // Reconstruct the shortest path
    const path = [end];
    let current = end;
    while (current !== start) {
      current = previous[current];
      path.unshift(current);
    }
  
    return {
      path: path,
      distance: distances[end],
    };
  }
  
  // Example usage
  const graph = {
    A: { B: 2, C: 4 },
    B: { A: 2, D: 3, E: 1 },
    C: { A: 4, D: 2 },
    D: { B: 3, C: 2, E: 5 },
    E: { B: 1, D: 5 },
  };
  
  const start = 'A';
  const end = 'E';
  
  const result = dijkstra(graph, start, end);
  console.log('Shortest path:', result.path);
  console.log('Shortest distance:', result.distance);
  
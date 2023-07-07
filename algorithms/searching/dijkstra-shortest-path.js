// A Javascript program for Dijkstra's single
// source shortest path algorithm.
// The program is for adjacency matrix representation of the graph    
let V = 9;
 
function minDistance(dist, sptSet) {
    let minDist = Number.MAX_VALUE;
    let minIndx = -1;

    for (let i= 0; i < V; i++) {
        if (dist[i] < minDist && !sptSet[i]) {
            minDist = dist[i];
            minIndx = i;
        } 
      }

    return minIndx;  
}

function dijkstra(graph, src) {
  let sptSet = new Array(V).fill(false);
  let dist = new Array(V).fill(Number.MAX_VALUE);

  // Initialize the src
  dist[src] = 0;
  sptSet[src] = true;
  for (let i= 0; i < V - 1; i++) {
    if (graph[src][i] && i != src) {
        dist[i] = graph[src][i];
    } 
  }

   // Find shortest path for all vertices
  for (let i= 0; i < V; i++) {
      let u = minDistance(dist, sptSet)
      sptSet[u] = true;
      
      for (let j= 0; j < V; j++) {
           if (!sptSet[j] && graph[u][j] != 0 &&
                dist[u] != Number.MAX_VALUE &&
                dist[u] + graph[u][j] < dist[j]) {
                     dist[j] = dist[u] + graph[u][j];
         }
      }
    }
} 

// Driver code
let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]];

dijkstra(graph, 0);

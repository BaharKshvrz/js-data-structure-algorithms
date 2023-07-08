/*
Time Complexity:  O(V * E), where V is the number of vertices in the graph and E is the number of edges in the graph
Auxiliary Space: O(E)
*/

// a structure to represent a connected, directed and weighted graph
class Edge {
    constructor(src, dest, weight) {
      this.src = src;
      this.dest = dest;
      this.weight = weight;
    }
  }

class Graph {
    constructor(V, E) {
      this.V = V;
      this.E = E;
      this.edge = [];
    }
  }

function createGraph(V, E) {
    const graph = new Graph(V, E);
    for(let i= 0; i < E; i++) {
        graph.edge[i] = new Edge();
    }
    return graph;
}

function BellmanFord(graph, src) {
   let V = graph.V;
   let E = graph.E;
   const dist = new Array(V).fill(Number.MAX_VALUE);
   dist[src] = 0;

   // we do v-1 times relaxation
   for (let i= 0; i < V - 1; i++) {
     for (let j= 0; j < E; j++) {
        const u = graph.edge[j].src;
        const v = graph.edge[j].dest;
        const weight = graph.edge[j].weight;
        // dist[u] + weight < dist[v]: It's called relaxation
        if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
            dist[v] = dist[u] + weight;
          }
     }
   }
   return dist;
}


// Driver program to test methods of graph class
// Create a graph given in the above diagram
const V = 5;    // {0, 1, 2, 3, 4}
const E = 8;   // 8 edges
const graph = createGraph(V, E);
  
graph.edge[0] = new Edge(0, 1, -1);
graph.edge[1] = new Edge(0, 2, 4);
graph.edge[2] = new Edge(1, 2, 3);
graph.edge[3] = new Edge(1, 3, 2);
graph.edge[4] = new Edge(1, 4, 2);
graph.edge[5] = new Edge(3, 2, 5);
graph.edge[6] = new Edge(3, 1, 1);
graph.edge[7] = new Edge(4, 3, -3);
  
const dist = BellmanFord(graph, 0);
console.log(dist); // [ 0, -1, 2, -2, 1 ]

/*  
    initial graph:
     Graph {
     V: 5,
     E: 8,
     edge: [
        Edge { src: 0, dest: 1, weight: -1 },
        Edge { src: 0, dest: 2, weight: 4 },
        Edge { src: 1, dest: 2, weight: 3 },
        Edge { src: 1, dest: 3, weight: 2 },
        Edge { src: 1, dest: 4, weight: 2 },
        Edge { src: 3, dest: 2, weight: 5 },
        Edge { src: 3, dest: 1, weight: 1 },
        Edge { src: 4, dest: 3, weight: -3 }
       ]
    }

    result:
    [ 0, -1, 2, -2, 1 ]
*/
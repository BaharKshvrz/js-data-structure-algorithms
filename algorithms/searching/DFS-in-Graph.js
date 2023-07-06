class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);

        for(let i=0; i < v; i++) {
            this.adj[i] = [];
        }
    }

    // Function to add an edge into the graph
    addEdge(v, w) {
       this.adj[v].push(w)
    }

   // Prints DFS traversal from a given source s
     DFS(s) {
       // Make all the vertix unvisited
       let visited = new Array(this.V).fill(false);
       // Create a queue for BFS
       let stack=[];

       // push and visit the first element
       visited[s] = true;
       stack.push(s);

       while (stack.length) {
         const s = stack.pop()
         console.log(s + " ");
         this.adj[s].forEach(adjacent => {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                stack.push(adjacent);
            }
         });
       }
     }
}

const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(1, 4);
console.log("Graph is:", g);
console.log("Following is Depth First Traversal (starting from vertex 0):");
g.DFS(0);

/*
Graph is: Graph { V: 5, adj: [ [ 2, 3 ], [ 0, 4 ], [ 1 ], [], [] ] }
0 3 2 1 4 
*/


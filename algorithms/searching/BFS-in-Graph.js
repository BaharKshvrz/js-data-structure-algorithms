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

   // Prints BFS traversal from a given source s
    BFS(s) {
       // Make all the vertix unvisited
       let visited = new Array(this.V).fill(false);
       // Create a queue for BFS
       let queue=[];

       // push and visit the first element
       visited[s] = true;
       queue.push(s);

       while (queue.length) {
         const s = queue.shift()
         console.log(s + " ");
         this.adj[s].forEach(adjacent => {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.push(adjacent);
            }
         });
       }
    }
}

const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
console.log("Graph is:", g);
console.log("Following is Breadth First Traversal (starting from vertex 2):");
g.BFS(2);

/*
Graph is: Graph { V: 4, adj: [ [ 1, 2 ], [ 2 ], [ 0, 3 ], [ 3 ] ] }
Following is Breadth First Traversal (starting from vertex 2):2 0 3 1 
*/


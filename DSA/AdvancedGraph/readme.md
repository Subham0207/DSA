# Advaned graph

- To visit every edge once, you can remove the edge after you visit it.

# Algorithms
- Dijkstra: finding the shortest paths between nodes in a weighted graph (non-negative edge weights)
- Prims: (Minimum Spanning Tree) 
- Krushkal: (Minimum Spanning Tree)
- Topological sort: Only on (DAG) directed acyclic graph
- Bellman fords algorithm


# Graph properties
- Undirected graph: Connected Componenets
- Directed graph: Strongly connected components
- Topological sort (DAGs only)
- Bipartate Graphs ( 2 Colorability )


# Graph problem cheat-sheet

               Is the Graph Directed or Undirected?
             /                                      \
       [ Undirected ]                             [ Directed ]
      /              \                           /            \
Needs Ordering?   Cycle Check?             Needs Ordering?   Cycle Check?
      |                |                         |                |
(Not Possible)    DFS + Parent Track          TopSort           3-State DFS
                         OR              (DFS / Kahn's)         OR Kahn's
                     Union-Find

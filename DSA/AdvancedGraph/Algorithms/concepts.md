| Graph      | Euler Path                                       | Euler Circuit             |
| ---------- | ------------------------------------------------ | ------------------------- |
| Undirected | Exactly `2 odd-degree` vertices                  | 0 odd-degree vertices     |
| Directed   | Start: `out-in=1`, End: `in-out=1`, others equal | `in == out` everywhere    |


# Eulerian path 
path that visits every `edge` exactly once ( NOTE: not every node exactly once )
- Uses every edge exactly once.
- Vertices/nodes can be visited multiple times.
- graph must be `connected`

# Eulerian circuit
- Uses every edge exactly once
- start and ends at the same vertex/node.

# Directed Graph
- Eulerian path
    - start node: `outDeg - inDeg = 1`
    - end node: `inDeg - outDeg = 1`
    - every other nodes: `inDeg === outDeg`
- Eulerian circuit
    - `InDeg === outDeg` for every vertex

# Undirected graph
- Eulerian path
    - `Exactly 2` vertices have `odd degree`.
    - One is start and the other is the end.
- Eulerian circuit
    - `0 vertices` have `odd degree`.
    - Every vertex has `even degree`.
// compile and run: gcc ./graph.cpp -o graph -lstdc++ ; ./graph
#include <iostream>
#include <list>
 
using namespace std;
 
class Graph
{
    int Verticies;   
    list<int> *adjList;    // Pointer to an array containing adjacency lists
public:
    Graph(int vertex);  // Constructor
    void addEdge(int vertex, int endPoint); // function to add an edge to graph
    void BFS(int s);  // prints BFS traversal from a given source s
};
 
Graph::Graph(int numberOfVerticies)
{
    this->Verticies = numberOfVerticies;
    adjList = new list<int>[numberOfVerticies];
}
 
void Graph::addEdge(int vertex, int endPoint)
{
    adjList[vertex].push_back(endPoint);
}
 
void Graph::BFS(int currentNode)
{
    // Mark all the vertices as not visited
    bool *visited = new bool[Verticies];
    for(int i = 0; i < Verticies; i++)
        visited[i] = false;
 
    // Create a queue for BFS
    list<int> queue;
 
    // Mark the current node as visited and enqueue it
    visited[currentNode] = true;
    queue.push_back(currentNode);
 
    // 'i' will be used to get all adjacent vertices of a vertex
    list<int>::iterator i;
 
    while(!queue.empty())
    {
        // Dequeue a vertex from queue and process/print it
        currentNode = queue.front();
        cout << currentNode << " ";
        queue.pop_front();
 
        // Get all adjacent vertices of the dequeued vertex s
        // If a adjacent has not been visited, then mark it visited
        // and enqueue it
        for(i = adjList[currentNode].begin(); i != adjList[currentNode].end(); ++i)
        {
            if(!visited[*i])
            {
                visited[*i] = true;
                queue.push_back(*i);
            }
        }
    }
}
 
// Driver program to test methods of graph class
int main()
{
    // Create a graph in the shape of a binary tree with 8 nodes
    Graph g(8);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);
    g.addEdge(2, 6);
    g.addEdge(6, 7);
    
 
    cout << "Following is Breadth First Traversal "
         << "(starting from vertex 2) \n";
    g.BFS(0);
    cout << "\n";
    return 0;
}
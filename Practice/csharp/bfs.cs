using System.Collections.Generic;
using System.Console;

namespace Graph
{
    public Class Node 
    {
        //some data
        int Value;
        public Node Left;
        public Node Right;

        public Node(int val)
        {
            this.Value = val;
        }

        public AddNode(int val)
        {
            // traverse to bottom of tree
            // if 
        }

    }
    public Class Bfs
    {
        public static void BreadthFirstSearch(Node root)
        {
            Queue<Node> q = new Queue<Node>();
            q.Enqueue(root);
            while(q.Count > 0)
            {
                Node current = q.Dequeue();
                if(current == null)
                    continue;
                q.Enqueue(current.Left);
                q.Enqueue(current.Right);

                Console.WriteLine(current.Value);
            }
        }
    }

}
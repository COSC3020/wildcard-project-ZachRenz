[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

# Topological Sort 

(note: I used geeks for geeks for the definition of topological sort: https://www.geeksforgeeks.org/topological-sorting/)

I've had a lot of fun with the graphing functions lately and I wanted to look at other ways of sorting or analyzing these graphs. 

Topologcial sorting is a type of sorting that only works for Directed Acyclic graphs, graphs with no biways and no way of making circles in the path. Then the definition is this, for every edge $u-v$, $u$ goes before $v$ in the path. Meaning that there is always a node that goes before the other for any edge. I like to think of as if there is some topological perspective to it. 

![Fun Image!](/topSortExample.JPG)

(Mountains and streams and switchbacks are more fun let's be honest)

The correct way to represent this graph topologically would be [7,6,2,4,5,3,1,0], meaning 0 goes before 1, 3 goes before 5 and 4 and 2, 6 goes before them and 7 goes before any other node. 

So my plan for the wildcard project is to make an algorithm that finds the topological list for any algorithm and return false if the graph is not directed or acyclic. I plan to use a stack and a list of booleans to help me keep track of what nodes I've been too. I plan to start from the nodes with no connections and find the connections in reverse, using recursion to add the entire path one node will give us. Until we end at the nodes with the most connections, and reverse the list. 

# Result

I did have to make a list showing the connections that each node has, but other than that I made and algorithm that works here! It finds the correct topological list for each graph and returns false for a cyclic and/or undirected graph. 

The asymptotic complexity here is $\Theta(n^2)$

function top(graph = []){
    let visited = Array(graph.length).fill(false);
    let connections = Array(graph.length).fill(0);
    let topList = [];
    let cyclic = false;
    for(let i = 0; i < graph.length; i++){
        let sum = 0;
        for(let j = 0; j < graph.length; j++){
            sum = sum + graph[i][j];
        }
        connections[i] = sum;
    }

    let connectionsCounter = 0;
    for(let i = 0; i < graph.length; i++){
        for(let j = 0; j < graph.length; j++){
            if(connections[j] == connectionsCounter){
                topSort(j);
            }
        }
        connectionsCounter += 1;
    }
    
    function topSort(n){
        if(visited[n] == true){
            if(topList.indexOf(n) == -1) return cyclic = true;
            else return;
        }
        else{
            visited[n] = true;
            for(let c = 0; c < graph.length; c++){
                if(graph[n][c] == 1){
                    topSort(c);
                }
            }
            return topList.push(n);
        }
    }

    topList.reverse();
    if(cyclic == true) return false;
    return topList;
}


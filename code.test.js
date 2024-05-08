const fs = require('fs');
const assert = require('assert');
const { inflate } = require('zlib');

eval(fs.readFileSync('code.js')+'');

let graph1 = [
  [0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,0],
  [0,0,1,0,0,0,0,0],
  [0,1,0,0,0,1,1,0]
];

let graph2 = [
    [0,1,1,0,0,0],
    [0,0,1,0,0,0],
    [1,1,0,0,0,1],
    [1,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,1]
  ];

let graph3 = [
  [0,0,0,0,0,0,1,0],
  [1,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,1,0],
  [0,0,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0]
];

assert(JSON.stringify(top(graph1)) == JSON.stringify([7,6,2,4,5,3,1,0]));
assert(JSON.stringify(top(graph2)) == JSON.stringify(false));
assert(JSON.stringify(top(graph3)) == JSON.stringify([5,3,1,7,4,0,6,2]));



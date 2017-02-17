// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

//examples:
// array = [1, 2, 3, 4], count =1, result = [[1], [2], [3], [4]]
// array = [1, 2, 3, 4], count =2, result = [[1, 2], [3, 4]]
'use strict'

function process(array, count) {
  if (count == null || count < 1) return [];

  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(Array.prototype.slice.call(array, i, i += count));
  }
  return result;
};

var arr = null;//["word",1+ +"a", 2, 3, 4, function(){console.log("fun");}];
var c = 20;

console.log(process(arr,c));

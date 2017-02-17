/* Problem Description
Anna has an array, num, of n integers. She can reduce the array by 1 element by performing a move. Each move consists of the following three steps:
Pick two elements numi and numj, such that i ≠ j.
Remove the two selected elements (numi and numj) from the array.
Add the sum of the removed elements (numi + numj) as a new element at the end of the array.

Each move has a cost associated with it, and this cost is equal to the sum of the two elements removed from the array during the move. The cost of reducing the array by n−1 elements (i.e., to a single element) is the sum of the costs of all n−1 moves. For example, consider the array num = [1, 2, 3]. Anna removes 1 and 3 in her first move at a cost of 1 + 3 = 4, and the resultant array is num1 = [2, 4]. She then removes 2 and 4 in her second move at a cost of 2 + 4 = 6, and the resultant array is num2 = [6]. The total cost of reducing this array to one element using this sequence of moves is 4 + 6 = 10.

Complete the reductionCost function in your editor. It has 1 parameter: an array of n integers, num. It must return an integer denoting the minimum cost of reducing the array to a single element.

Input Format
The locked stub code in your editor reads the following input from stdin and passes it to your function:
The first line contains an integer, n, denoting the size of the num array.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing element i in num.

Constraints
2 ≤ n ≤ 104
0 ≤ numi ≤ 105

Output Format
Your function must return an integer denoting the minimum cost of reducing the array to a single element. This is printed to stdout by the locked stub code in your editor.

Sample Input 1
3
1
2
3

Sample Output 1
9

Explanation 1
Anna makes the following moves to reduce the array num = [1, 2, 3]:
Removes 1 and 2 at cost1 = 1 + 2 = 3, resulting in num1 = [3, 3].
Removes 3 and 3 at cost2 = 3 + 3 = 6, resulting in num2 = [6].

When we sum up the cost of each reduction, we get 3 + 6 = 9. Thus, we return 9 as our answer.

Sample Input 2
4
1
2
3
4

Sample Output 2
19

Explanation 2
Anna makes the following moves to reduce the array num = [1, 2, 3, 4]:
Removes 1 and 2 at cost1 = 1 + 2 = 3, resulting in num1 = [3, 4, 3].
Removes 3 and 3 at cost2 = 3 + 3 = 6, resulting in num2 = [4, 6].
Removes 4 and 6 at cost3 = 4 + 6 = 10, resulting in num3 = [10].

When we sum up the cost of each reduction, we get 3 + 6 + 10 = 19. Thus, we return 19 as our answer.
*/

/* Stdin:
9
1
2
3
4
5
6
3
4
5
*/

/* Stdout
Output:
43

Debug Output:
[ 1, 2, 3, 3, 4, 4, 5, 5, 6 ]
[ 3 ]
[ 3, 6 ]
[ 3, 6, 8 ]
[ 3, 6, 8, 10 ]
[ 3, 6, 8, 10, 16 ]
*/


process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 [1,2,3] (1+2=3)
 3,3 (3+3=6)

 return 6+3=9
 */

 var sum = function(arr) {
        var result = 0;

        arr.forEach(function(i) {
            result += i;

        });

        return result;
    }

function reductionCost(num) {

    num.sort();
    console.log(num);

    var iOne = 0;
    var iTwo = 1;
    var numTwo = [];


    while (iOne < num.length) {

        if(iTwo < num.length) {

            numTwo.push(num[iOne] + num[iTwo]);

            iOne += 2;
            iTwo = iOne+1;
        }
        else {
            numTwo.push(numTwo[numTwo.length-1] + num[num.length-1]);
            iOne++;
        }
        console.log(numTwo);
    }

    return sum(numTwo);
}

var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _num_size = 0;
    _num_size = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    var _num = [];
    var _num_item;
    for(var _num_i = 0; _num_i < _num_size; _num_i++) {
        var _num_item = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
        __input_currentline += 1;
        _num.push(_num_item);
    }

    res = reductionCost(_num);
    wstream.write(res+"\n");

    wstream.end();
});

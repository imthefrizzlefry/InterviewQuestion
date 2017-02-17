/*stdin: hello

Output:
hello
*/
// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.


function exampleProcessing(inputString) {
    console.log(inputString);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input+=input;
});

process.stdin.on("end", function() {
    exampleProcessing(_input);
})

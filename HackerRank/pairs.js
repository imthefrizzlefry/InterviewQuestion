function processData(input) {
    //Enter your code here
    input = input.replace('\n', " ");
    input = input.split(' ');
    var n = input[0];
    var k = input[1];
    var array = input.slice(2);
    var count = 0;

    for(var i = 0; i < n+1; i++) {
        for(var x = i+1; x < input.length-1; x++) {
            if((array[x] == +array[i] + +k) || (array[x] == array[i]-k) ) {
                count++;
            }
        }
    }
    console.log(count);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

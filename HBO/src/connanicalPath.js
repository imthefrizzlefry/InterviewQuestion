'use strict'

var connanicalPath = function() {
    var output = "";
    var relativePath = arguments[0].split("/");

    if(relativePath[0] == ".") {
        output = __dirname;
    }
    
    return output;
}

module.exports.connanicalPath = connanicalPath;
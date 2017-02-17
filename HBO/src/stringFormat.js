'use strict'

var stringFormat = function() {
    var output = arguments[0];
    var replacements = arguments.length;

    for(var i=1; i < replacements; i++) {
        var replacement = "{" + i + "}";
        output = output.replace(replacement, arguments[i]);
    }

    return output;
}

module.exports.stringFormat = stringFormat;
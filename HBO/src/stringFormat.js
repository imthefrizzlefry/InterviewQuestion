'use strict'

var stringFormat = function() {
    var format = arguments[0],
        replacements = arguments.length,
        output = "",
        startIndex = 0,
        endIndex = 0;

    for(var i=1; i < replacements; i++) {
        var replacement = "{" + i + "}";
        if(format.includes(replacement))
        {
            endIndex = startIndex + format.slice(startIndex).indexOf(replacement) + 3;
            output += format.substring(startIndex, endIndex).replace(replacement, arguments[i]);
            startIndex = endIndex;
        } else if (i+1 == replacements & startIndex == 0)
        {
            output = format;
        }
    }

    return output;
}

module.exports.stringFormat = stringFormat;
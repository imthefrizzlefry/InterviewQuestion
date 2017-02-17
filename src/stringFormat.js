'use strict'
/*
a long story of Google searches on this one.  The best solution is the String.prototype.format function.   
I did have some confusion as to why I was unable to convert this method to work with my own method, 
which I will look into, but take a look below to find some of the other ideas I found online.
I took this solution from:
  http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery

  Then I modified the return to check for undefined, and handle that gradefully.
  (see line 17)
*/
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m == "{{") { return "{"; }
    if (m == "}}") { return "}"; }
    return (typeof args[n] != 'undefined') ? args[n] : m;
  });
};

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

    // I found this loop on some guys blog:
    //https://cyanbyfuchsia.wordpress.com/2012/06/23/string-format-in-javascript/#comment-2002

    // The problem is that it fails the cases where the formatted string contains {#} where {#} is the index of a valid parameter 
    // for (var i = 1; i < arguments.length; i++) {
    //     var regEx = new RegExp("\\{" + i + "\\}", "gm");
    //     s = s.replace(regEx, arguments[i]);
    // }

    // when I first found the prototype example, I wanted to someone put that into this function
    // var temp = arguments[0].replace(/\{(\d+)\}/g, function (m, n) { return arguments[n]; });
    // console.log(arguments[0]);
    // return temp;

    // var s = arguments[0];    
    // s = s.replace(/\{(\d+)\}/g, function (m, n) { return arguments[n]; });
    // return s;



// String.format = function () {
//     var s = arguments[0];
//     for (var i = 0; i < arguments.length - 1; i++) {
//         var reg = new RegExp("\\{" + i + "\\}", "gm");
//         s = s.replace(reg, arguments[i + 1]);
//     }
//     return s;
// }


module.exports.stringFormat = stringFormat;
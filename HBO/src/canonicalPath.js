'use strict'
var canonicalPath = {
    isPlatformWindows: function() { return process.platform == 'win32'},
    getUserDirectory: function(runningWindows) {return process.env[runningWindows ? 'USERPROFILE' : 'HOME']; },
    getCurrentDirectory: function() {return __dirname},
    Get: function() {

        var runningOnWindows = this.isPlatformWindows()
        var dirDelimiter = runningOnWindows ? "\\" : "/";
        var relativePath = arguments[0].split(dirDelimiter);
        var base = this.getCurrentDirectory();
        var i = 0;
        if(relativePath[i] == "~") {
            base = this.getUserDirectory(runningOnWindows);
            i++;
        }

        base = base.split(dirDelimiter);

        for(i; i < relativePath.length; i++) {
            if(relativePath[i] == "."){
                continue;
            }
            if(relativePath[i] == "..") {
                base.pop();
            } else {
                base.push(relativePath[i]);
            }
        }
        var output = base.join(dirDelimiter)
        return (output.slice(-1) == dirDelimiter) ? output.slice(0,-1) : output;
    } 

};

module.exports.canonicalPath = canonicalPath;
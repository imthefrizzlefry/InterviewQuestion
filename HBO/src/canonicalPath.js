'use strict'
var canonicalPath = {
    isPlatformWindows: function() { return process.platform == 'win32'},
    getUserDirectory: function(runningWindows) {return process.env[runningWindows ? 'USERPROFILE' : 'HOME']; },
    getCurrentDirectory: function() {return __dirname},
    Get: function(relativePath) {
        //declaring new variables for method
        var runningOnWindows = this.isPlatformWindows()
        var dirDelimiter = runningOnWindows ? "\\" : "/";
        var base = "";
        var i = 0;

        // handling home directory exception
        if(relativePath[i] == "~") {
            base = this.getUserDirectory(runningOnWindows);
            i++;
        } else {
            base = this.getCurrentDirectory();
        }

        // splitting paths into arrays to make them easier to work with
        relativePath = relativePath.split(dirDelimiter);
        base = base.split(dirDelimiter);

        // loop through entries in relative path, and process each part
        for(i; i < relativePath.length; i++) {
            // ignore dot because it's the current directory
            if(relativePath[i] == "."){
                continue;
            }

            // either append directory name or pop for parent directory
            if(relativePath[i] == "..") {
                base.pop();
            } else {
                base.push(relativePath[i]);
            }
        }

        // recombine path into a single string delimited by the appropriate path delimiter
        var output = base.join(dirDelimiter)

        // strip trailing delimiter for the case of ./ and ~/
        return (output.slice(-1) == dirDelimiter) ? output.slice(0,-1) : output;
    } 

};

module.exports.canonicalPath = canonicalPath;
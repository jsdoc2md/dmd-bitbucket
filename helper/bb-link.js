"use strict";

exports.bbLink = function() {
    var args = Array.prototype.slice.call(arguments);
    args.pop(); //dumping some unwanted garbage.
    if (args[5]) { //Inserting extra space if needed...
        var t = args.pop();
        args.push(" ");
        args.push(t);
    }
    return args.join("").replace(/[^ \w]+/g, "").replace(/ +/g, "-").toLowerCase();
};

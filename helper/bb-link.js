"use strict";

var BBLINK_PREFIX = "#markdown-header-",
    index = [],
    links = {

    }
;

function getLink( parent, name, link ) {
    if ( parent === "event" ) return name.toLowerCase();
    var sig = parent + "#" + name,
        out = links[sig]
    ;

    if (link) {
        links[sig] = link;
        out = link;
    } else if (!out) {
        sig = "null#" + name;
        out = links[sig];
    }
    if (!out) console.log(sig, out, link);

    return out;
}

exports.bbLink = function( parent, prefix, accessSymbol, name, methodSign, returnTypes ) {
    var args = Array.prototype.slice.call(arguments);
    args.pop(); //dumping some unwanted garbage.
    if (args[5]) { //Inserting extra space if needed...
        var t = args.pop();
        args.push(" ");
        args.push(t);
    }
    var link = args.join("").replace(/[^ \w]+/g, "").replace(/ +/g, "-").toLowerCase()
    return getLink( parent, name, link );
};

exports.bbGuessLink = function( parent, prefix, accessSymbol, name, methodSign, returnTypes ) {
    var link = getLink( parent, name )
    if (link) {
        return "[" + name + "](" + BBLINK_PREFIX + link + ")";
    }
    return name;
}

exports.bbParseLink = function( roughName ) {
    if ( !roughName ) return;
    if (roughName.indexOf("http") >= 0) {
        return "[" + roughName + "](" + roughName + ")";
    }
    var parts = roughName.split(/[#\.:]/),
        link = getLink( parts[0], parts[1] );
    ;
    console.log(roughName, link);
    if (link) {
        return "[" + roughName + "](" + BBLINK_PREFIX + link + ")";
    }
    return roughName;
}

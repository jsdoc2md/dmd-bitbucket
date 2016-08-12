[![view on npm](http://img.shields.io/npm/v/dmd-bitbucket.svg)](https://www.npmjs.org/package/dmd-bitbucket)
[![npm module downloads](http://img.shields.io/npm/dt/dmd-bitbucket.svg)](https://www.npmjs.org/package/dmd-bitbucket)
[![Dependency Status](https://david-dm.org/jsdoc2md/dmd-bitbucket.svg)](https://david-dm.org/jsdoc2md/dmd-bitbucket)

# dmd-bitbucket
Plugin for [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown) to produce markdown suitable for bitbucket.

[Demo output](https://bitbucket.org/75lb/dmd-bitbucket-demo).

## Install and use
In the project requiring this plug-in, install it as a devDependency:
```
$ npm install dmd-bitbucket --save-dev
```

Then pass the plug-in name to `jsdoc2md` or `dmd` when generating your docs:
```
$ jsdoc2md --plugin dmd-bitbucket --files lib/*.js
```

* * *

&copy; 2015-16 Lloyd Brookes <75pound@gmail.com>.
[![view on npm](https://badgen.net/npm/v/dmd-bitbucket)](https://www.npmjs.org/package/dmd-bitbucket)
[![npm module downloads](https://badgen.net/npm/dt/dmd-bitbucket)](https://www.npmjs.org/package/dmd-bitbucket)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/dmd-bitbucket)](https://github.com/jsdoc2md/dmd-bitbucket/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/dmd-bitbucket)](https://github.com/jsdoc2md/dmd-bitbucket/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/jsdoc2md/dmd-bitbucket/actions/workflows/node.js.yml/badge.svg)](https://github.com/jsdoc2md/dmd-bitbucket/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

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

&copy; 2015-24 Lloyd Brookes <75pound@gmail.com>.

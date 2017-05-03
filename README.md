# done-inspect

[![Build Status](https://travis-ci.org/donejs/done-inspect.png?branch=master)](https://travis-ci.org/donejs/done-inspect)

An inspection tool for your DoneJS application

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'done-inspect';
```

### CommonJS use

Use `require` to load `done-inspect` and everything else
needed to create a template that uses `done-inspect`:

```js
var plugin = require("done-inspect");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/done-inspect/dist/global/done-inspect.js'></script>
```

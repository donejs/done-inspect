# done-inspect

<!-- [![Build Status](https://travis-ci.org/donejs/done-inspect.png?branch=master)](https://travis-ci.org/donejs/done-inspect) -->

An modular inspection tool for your DoneJS application

## Installation

```bash
npm install --save-dev done-inspect
```

or 

```bash
yarn add done-inspect --dev
```

## Usage

### ES6 and CommonJS use

Use ES6 `import` or CommonJS `require` to load `done-inspect`. After which,
it can be used in your template.

```js
// ES6
import plugin from 'done-inspect';

// CommonJS
var plugin = require("done-inspect");
```

Or import it directly into your `can-stache` template with `can-import` and `stealjs`:

```mustache
<can-import from="done-inspect">
  <done-inspect />
</can-import>
```

## Modules

Writing a `done-inspect` module requires an export object with three properties and,
at this time, one function.

```js
import './module-name.less';

export default {
  group: '<string :: The group the module belongs to>',
  title: '<string :: The short title shown to the User>',
  description: '<string :: What function the module performs>',
  onChange() {
  /**
   * Currently done-inspect's interface only supports checkboxes.
   *
   * This function will be called each time the User clicks the
   * module's checkbox. Therefore, it needs to account for being
   * checked and unchecked.
   *
   * Personally, I store a state flag in the module object.
   */
  },
};
```

### Style Naming Conventions

In order to reduce the change of style conflict, I use the following class
name convention:

```css
.done-inspect-module-name-class-name {
  // ALL THE STYLES
}
```
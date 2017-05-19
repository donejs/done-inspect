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
var plugin = require('done-inspect');
```

Or import it directly into your `can-stache` template with `can-import` and `stealjs`:

```mustache
<can-import from="done-inspect" />
<done-inspect />

{{!-- With configuration options and an application title --}}
<done-inspect {options}="anObject" {title}="aString" />
```

### Options

The `options` parameter is expected to be an object and accepts only two properties:
`expanded` and `modules`.

* `expanded` is a boolean and expects `true` or `false` as values
* `modules` is expected to be an `Array` of `Object` where each object matches the interface
of a module.

### Title

The `title` parameter take a string and will be displayed at the top of the inspector. The idea
for this was to display the package.json's `name + version` at the top of the inspector but
any string is accepted.

## Modules

### Builtin Modules

Two modules come with the current version of `done-inspect`:
* __Select Wand__ - Allows the User to hover over the application's custom components and outline
them. In future versions, this selection will also include the ability to inspect and change
the components internal state.
* __Show Names__ - Turning the module on will place labels by all of the application's custom
components, showing their tag names.

### Writing Custom Modules

Writing a `done-inspect` module requires an exported object with three properties and one function.

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
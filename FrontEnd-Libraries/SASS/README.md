# SASS Basics Guide 🎨

Welcome to the SASS Basics Guide! In this guide, we'll explore the fundamental features of SASS, a powerful CSS preprocessor that enhances your stylesheets with variables, nesting, mixins, loops, and more.

## Table of Contents

- [Introduction](#introduction)
- [Variables](#variables)
- [Nesting](#nesting)
- [Mixins](#mixins)
- [Conditional Directives](#conditional-directives)
  - [`@if` Directive](#if-directive)
- [Loops](#loops)
  - [`@for` Directive](#for-directive)
  - [`@each` Directive](#each-directive)
  - [`@while` Directive](#while-directive)
- [Partials and Imports](#partials-and-imports)
- [`@extend` Directive](#extend-directive)
- [Conclusion](#conclusion)

## Introduction 📜

SASS is a CSS preprocessor that enhances your stylesheet development by providing features like variables, nesting, mixins, loops, and more.

## Variables 🎈

In SASS, declare variables using the `$` symbol. They allow you to store values and reuse them throughout your stylesheets.

```scss
$primary-color: blue;

.button {
  background-color: $primary-color;
}
```

## Nesting 🐦

SASS supports nesting, allowing you to write more organized and readable CSS rules.

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

## Mixins 🌀

Mixins in SASS allow you to create reusable styles. For example, you can define a mixin for adding box shadows.

```scss
@mixin box-shadow($x, $y, $blur, $color) {
  -webkit-box-shadow: $x $y $blur $color;
  box-shadow: $x $y $blur $color;
}
```

And then use it:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

## Conditional Directives 🎯

SASS provides conditional directives, similar to programming languages, to apply different styles based on conditions.

### `@if` Directive

The `@if` directive in SASS is useful to test for a specific case - it works just like the `if` statement in JavaScript. It can be used to apply different styles based on conditions.

```scss
$font-size: 18px;

body {
  @if $font-size > 16px {
    font-size: $font-size;
  }
  @else if $font-size == 16px {
    font-size: 16px;
  }
  @else {
    font-size: 14px;
  }
}
```

## Loops 🔁

SASS provides different types of loops for generating repetitive styles.

### `@for` Directive

The `@for` directive generates styles in a loop. It has two variations: "start through end" (inclusive) and "start to end" (exclusive).

Use "start through end" when you want to include the end value in the loop:

```scss
/* Start through end */
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100% / 12 * $i;
  }
}
```

Use "start to end" when you want to exclude the end value from the loop:

```scss
/* Start to end */
@for $i from 1 to 12 {
  .col-#{$i} {
    width: 100% / 12 * $i;
  }
}
```

### `@each` Directive

The `@each` directive iterates through a list.

```scss
@each $color in blue, red, green {
  .#{$color}-text {
    color: $color;
  }
}
```

### `@while` Directive

The `@while` directive creates styles until a condition is met.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} {
    width: 100% / 12 * $x;
  }
  $x: $x + 1;
}
```

## Partials and Imports 📦

SASS allows you to organize your styles into partials and import them into other files.

Create a partial file named `_mixins.scss`:

```scss
@mixin my-mixin {
  /* mixin code */
}
```

Import the partial into another SASS file:

```scss
@import 'mixins';
```

## `@extend` Directive 🧬

The `@extend` directive in SASS lets you reuse CSS rules from one element in another.

```scss
.panel {
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

.big-panel {
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

## Conclusion 🎉

SASS offers a range of powerful features that streamline your CSS development process. By incorporating variables, nesting, mixins, loops, and more, you can create cleaner, more maintainable stylesheets.

For in-depth information and advanced usage, consult the official [SASS documentation](https://sass-lang.com/documentation).

Happy styling! 🎨

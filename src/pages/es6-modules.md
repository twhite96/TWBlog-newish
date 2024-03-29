---
ID: 2480
title: ES6 Modules
author: Tiffany White
date: "2017-10-10"
spoiler: ES6 modules allows us to have reusable code, in separate files. We do this to eliminate initially massive js files, like app.js  in a Node and Express project. Modules allow us to spread code over relevant files.
layout: post
link: https://tiffanywhite.tech/es6-modules/
published: true
tags:
  - javascript
  - modules
categories:
  - ES6
  - "Tiffany's Posts"
---


ES6 modules allows us to have reusable code, in separate files. We do this to eliminate initially massive js files, like `app.js` in a Node and Express project. Modules allow us to spread code over relevant files.

Take this `students.js` file

```javascript
const students = [‘Peter’, ‘Paul’, ‘Mary’];

export const students = [‘Peter’, ‘Paul’, ‘Mary’];
```

Export allows us to export functions, objects, and primitive values into another files.

In `app.js` we import those values as modules into the main js file:

```javascript
import { students } from ‘./students’;
```
…where `./students` represents the file stored in the same directory as `app,js`.

## Importing More than One Value

You can import more than one value from a module. Take `students.js`:

```javascript
export const total = 42;
```
We can import this variable into `app.js` along with the `students` array:

```javascript
import { students, total } from ‘./students’;
```
## Export Data and Functions Between Files

You can export functions *between* files, such as in this `calc.js` file:

```javascript
const add = (x, y) =&gt; {
  return x + y;
}

const divide = (x, y) =&gt; {
  return x / y;
}

export { add, divide };
```

To import this module into `app.js`:

```javascript
import { add, divide } from ‘./calc’;
```

Exports are not just limited to primitive data types.

## Export Fallbacks with Default
What if we wanted a function to be the main function for our module?

We can add a `default` keyword to have a fallback:

```javascript
export { add, divide };
export default multiply;
```
This will allow the module to fallback on a function if another fails.

## Watch for this Pitfall

It may be tempting to do something like this:

```javascript
export default const add = (x, y) =&gt; {
  return x + y;
}
```

*This will result in a TypeError*.

Why?

The `default` keyword creates a variable called `default`. Adding `default` and `const` simultaneously, JavaScript will try to declare two different variables, which is not allowed in most programming languages.

## More to Come




ES6 modules allows us to have reusable code, in separate files. We do this to eliminate initially massive js files, like `app.js` in a Node and Express project. Modules allow us to spread code over relevant files.

Take this `students.js` file

```javascript
const students = [‘Peter’, ‘Paul’, ‘Mary’];

export const students = [‘Peter’, ‘Paul’, ‘Mary’];
```

Export allows us to export functions, objects, and primitive values into another files.

In `app.js` we import those values as modules into the main js file:

```javascript
import { students } from ‘./students’;
```
…where `./students` represents the file stored in the same directory as `app,js`.

## Importing More than One Value

You can import more than one value from a module. Take `students.js`:

```javascript
export const total = 42;
```
We can import this variable into `app.js` along with the `students` array:

```javascript
import { students, total } from ‘./students’;
```
## Export Data and Functions Between Files

You can export functions *between* files, such as in this `calc.js` file:

```javascript
const add = (x, y) =&gt; {
  return x + y;
}

const divide = (x, y) =&gt; {
  return x / y;
}

export { add, divide };
```

To import this module into `app.js`:

```javascript
import { add, divide } from ‘./calc’;
```

Exports are not just limited to primitive data types.

## Export Fallbacks with Default
What if we wanted a function to be the main function for our module?

We can add a `default` keyword to have a fallback:

```javascript
export { add, divide };
export default multiply;
```
This will allow the module to fallback on a function if another fails.

## Watch for this Pitfall

It may be tempting to do something like this:

```javascript
export default const add = (x, y) =&gt; {
  return x + y;
}
```

*This will result in a TypeError*.

Why?

The `default` keyword creates a variable called `default`. Adding `default` and `const` simultaneously, JavaScript will try to declare two different variables, which is not allowed in most programming languages.

## More to Come





ES6 is the standard now and so I am learning it, as quickly as possible. Let me know some of your favorite features of ES6.
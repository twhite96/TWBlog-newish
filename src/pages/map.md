---
ID: 2428
title: Map, Another Higher Order Function
author: Tiffany White
date: "2017-09-09"
spoiler: Map is another higher order function that goes through an array and doesn’t discard it but instead transforms/mutates it. Here, I’d like to get an array of all the names of the animals.
layout: post
link: https://tiffanywhite.tech/map/
published: true
tags:
  - higher order functions
  - javascript
  - map
categories:
  - Functional Programming
---


Map is another higher order function that goes through an array and doesn’t discard it but instead transforms/mutates it.

Here, I’d like to get an array of all the names of the animals.

```js
const animals = [
  { name: ‘Catticus Finch’,  species: ‘cat’ },
  { name: ‘Peaches’,         species: ‘fish’ },
  { name: ‘Bobby’,           species: ‘dog’ },
  { name: ‘Lucifer’,         species: ‘cat’ },
  { name: ‘Beatrix’,         species: ‘rabbit’ },
  { name: ‘Cerulean’,        species: ‘fish’ }
];
```

Here’s how we would accomplish this with a for loop:
```js
var names = [];

for (var i = 0; i < animals.length i++) {
  names.push(animals[i].name);
}
```

The function `.filter` expects a boolean, but `.map` expects a callback function to return a transformed object it will push into a new array.

To return the names of each of the animals in code:

In ES5:
```js
var names = animals.map(function() {
  return animal.name;
});
```

In ES6:
```js
const names = animals.map(animal => animal.name);
```
![](https://cl.ly/3D472P333D09/Screen%20Recording%202018-03-19%20at%2002.53%20PM.gif)

You can use `.map` to return a subset of an array. Since it expects a callback to return an object, we can make new objects.

In ES5
```js
var names = animals.map(function(animal) {
  return animal.name + ‘ is a ‘ + animal.species;
});
```

In ES6
```js
const names = animals.map(animal => animal.name + ‘is a ‘ + animal.species);
```
![](https://cl.ly/3s111R402r2C/Screen%20Recording%202018-03-19%20at%2002.55%20PM.gif)

## Easier Array Manipulation with Higher Order Functions

`.map()` and `.filter()` are just a couple of higher order functions you can use to manipulate and iterate over arrays.

Map is another higher order function that goes through an array and doesn’t discard it but instead transforms/mutates it.

Here, I’d like to get an array of all the names of the animals.

```js
const animals = [
  { name: ‘Catticus Finch’,  species: ‘cat’ },
  { name: ‘Peaches’,         species: ‘fish’ },
  { name: ‘Bobby’,           species: ‘dog’ },
  { name: ‘Lucifer’,         species: ‘cat’ },
  { name: ‘Beatrix’,         species: ‘rabbit’ },
  { name: ‘Cerulean’,        species: ‘fish’ }
];
```

Here’s how we would accomplish this with a for loop:
```js
var names = [];

for (var i = 0; i &lt; animals.length i+) {
  names.push(animals[i].name);
}
```

The function `.filter` expects a boolean, but `.map` expects a callback function to return a transformed object it will push into a new array.

To return the names of each of the animals in code:

In ES5:
```js
var names = animals.map(function() {
  return animal.name;
});
```

In ES6:
```js
const names = animals.map(animal => animal.name);
```
![](https://cl.ly/3D472P333D09/Screen%20Recording%202018-03-19%20at%2002.53%20PM.gif)

You can use `.map` to return a subset of an array. Since it expects a callback to return an object, we can make new objects.

In ES5
```js
var names = animals.map(function(animal) {
  return animal.name + ‘ is a ‘ + animal.species;
});
```

In ES6
```js
const names = animals.map(animal => animal.name + ‘is a ‘ + animal.species);
```
![](https://cl.ly/3s111R402r2C/Screen%20Recording%202018-03-19%20at%2002.55%20PM.gif)

## Easier Array Manipulation with Higher Order Functions

`.map()` and `.filter()` are just a couple of higher order functions you can use to manipulate and iterate over arrays.





You can check out [this link](http://eloquentjavascript.net/05_higher_order.html) for further reading.

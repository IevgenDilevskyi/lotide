# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ievgendilevskyi/lotide`

**Require it:**

`const _ = require('@ievgendilevskyi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first item in array
* `tail(array)`: returns array with removed first item
* `middle(array)`: returns array with one middle item from given array with odd number of items (middle([1, 2, 3]) returns [2]). Returns array with two middle items if given array has even number of items (middle([1, 2, 3, 4]) returns [2, 3])
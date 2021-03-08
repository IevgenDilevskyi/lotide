const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(tail(words))[0], "Labs");
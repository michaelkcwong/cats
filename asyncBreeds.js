// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data. ");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return data;
});
// ISSUE: Attempting to reutn data out here will also not work.
//Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// We try to get the return value
const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value: ', bombay); // => will NOT Print out details, instead we will see undefined!
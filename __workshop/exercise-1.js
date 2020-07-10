// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  promise = new Promise((res, rej) => {
    if(array.every(x => typeof(x) === 'string')){
      let capitalizedArray = array.map(x => x.toUpperCase());
      res(capitalizedArray);
    } else {
      rej('Every element of array must be a string');
    }
  });
  
  return promise;
};

const sortWords = (array) => {
  return array.sort((a, b) => a - b);
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

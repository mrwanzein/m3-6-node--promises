// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (language) => {
  return request(`https://journeyedu.herokuapp.com/hello/${language}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse; // 2
    })
    .catch((err) => err.error ? JSON.parse(err.error) : err);
};

greeting('noexist').then((result) => console.log(result));
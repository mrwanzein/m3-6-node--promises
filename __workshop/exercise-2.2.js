// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (language) => {
  return request(`https://journeyedu.herokuapp.com/hello/${language}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse; // 2
    })
    .catch((err) => console.log('Error: ', err));
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
greeting('de').then((result) => console.log(result));
greeting('zh').then((result) => console.log(result));
greeting('ja').then((result) => console.log(result));
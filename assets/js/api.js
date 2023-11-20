'use strict';

const api_key = 'c08a5b544a250b00781a187cb551af8f';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromSever = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};


export {imageBaseURL, api_key, fetchDataFromSever}

console.log('Test')
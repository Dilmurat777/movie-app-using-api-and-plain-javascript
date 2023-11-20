'use strict';

// Add event on many elements

const addEventOnElements = function(elements, eventType, callback) {
	for (const elem of elements) elem.addEventListener(eventType, callback);
}

const searchBox = document.querySelector('[search-box]');
const searchTogglers = document.querySelectorAll('[search-toggler]');

addEventOnElements(searchTogglers, 'click', function() {
	searchBox.classList.toggle('active')
})

// const api_key = 'c08a5b544a250b00781a187cb551af8f';
// const imageBaseURL = 'https://image.tmdb.org/t/p/';

// function fetchDataFromSever() {
//   fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c08a5b544a250b00781a187cb551af8f`)
// 	.then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// };

// fetchDataFromSever()

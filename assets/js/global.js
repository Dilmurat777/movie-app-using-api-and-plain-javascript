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

//store movieId in 'localStorage'


const getMovieDetail = function(movieId) {
	window.localStorage.setItem('movieId', String(movieId));
}
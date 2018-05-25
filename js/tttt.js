$.ajax({
   url: 'http://date.jsontest.com',
   type: 'GET',
}).done( function(data) {
   console.log(data)});


$.ajax({
	   url: 'https://swapi.co/api/people/4/',
	   type: 'GET',
	}).done( function(movie) {
	   console.log(movie)});

$.ajax({
	   url: 'http://localhost:8282/books/',
	   type: 'GET',
	}).done( function(movie) {
	   console.log(movie)});
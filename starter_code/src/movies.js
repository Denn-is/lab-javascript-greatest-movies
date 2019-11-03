/* eslint no-restricted-globals: 'off' */

function calculateAverageMovieRate(movies) {
	if (!movies.length) {
		return 0;
	} else {
		const sum = movies.reduce((sum, movie) => {
			return sum + movie.rate;
		}, 0);
		return parseFloat(sum / movies.length);
	}
}

function calculateAverageDramaRate(movies) {
	const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
	if (!dramaMovies.length) {
		return 0;
	} else {
		return calculateAverageMovieRate(dramaMovies);
	}
}

function orderByYear(movies) {
	const moviesSortedByYear = [...movies];
	moviesSortedByYear.sort((a, b) => {
		if (a.year > b.year) {
			return 1;
		} else if (a.year < b.year) {
			return -1;
		} else if (a.title.toLowerCase() > b.title.toLowerCase()) {
			return 1;
		} else if (a.title.toLowerCase() < b.title.toLowerCase()) {
			return -1;
		}
	});
	return moviesSortedByYear;
}

function countSpielbergDramaMovies(movies) {
	const spielbergDramaMovies = movies.filter(
		movie =>
			movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
	);
	if (!spielbergDramaMovies.length) {
		return 0;
	} else {
		return spielbergDramaMovies.length;
	}
}

function orderAlphabetically(movies) {
	return movies
		.map(movie => movie.title)
		.sort((a, b) => {
			const firstMovieTitle = a.toLowerCase();
			const secondMovieTitle = b.toLowerCase();
			if (firstMovieTitle > secondMovieTitle) {
				return 1;
			} else if (firstMovieTitle < secondMovieTitle) {
				return -1;
			} else {
				return 0;
			}
		})
		.slice(0, 20);
}

// function orderAlphabetically(arr) {
// 	let allAlphabeticallyOrdered = [...arr];
// 	let topTwenty = [];
// 	allAlphabeticallyOrdered.sort((a, b) => {
// 		if (a.title.toLowerCase() > b.title.toLowerCase()) {
// 			return 1;
// 		} else if (a.title.toLowerCase() < b.title.toLowerCase()) {
// 			return -1;
// 		} else {
// 			return 0;
// 		}
// 	});
// 	for (i = 0; i < 20; i++) {
// 		topTwenty.push(allAlphabeticallyOrdered[i].title);
// 	}
// 	return topTwenty;
// }

function turnHoursToMinutes(movies) {
	return movies.map(movie => {
		const duration = movie.duration.split(" ");
		let minutes = 0;
		for (let time of duration) {
			if (time.includes("h")) {
				minutes += parseInt(time) * 60;
			} else {
				minutes += parseInt(time);
			}
		}
		return {
			...movie,
			duration: minutes
		};
	});
}

// function turnAnyHoursToMinutes(time) {
// 	const splitTime = time.split(" ");
// 	let minutes = 0;
// 	if (splitTime.includes("h")) {
// 		return (minutes = parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]));
// 	} else {
// 		return (minutes = parseInt(splitTime[1]));
// 	}
// }

// function turnHoursToMinutes(movies) {
// 	return movies.map(movie => {
// 		return {
// 			...movie,
// 			duration: turnAnyHoursToMinutes(movies.duration)
// 		};
// 	});
// }

// BONUS Iteration: Best yearly rate average - Best yearly rate average


/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function calculateAverageMovieRate (arr) {
    const sumOfRating = arr.reduce((accumulator, value, index, originalArray) => {
     return accumulator + arr[index].rate;
 }, 0);
 //  return (parseFloat(Math.round((sumOfRating/arr.length) * 100) / 100).toFixed(2))
    return Number((sumOfRating / arr.length).toFixed(2));
 };
 
 calculateAverageMovieRate(MOVIES)

// Iteration 2: Drama movies - Get the average of Drama Movies
function calculateAverageDramaRate (arr) {
    const dramaArray = arr.filter((movie) => {
      return movie.genre.includes("Drama")});
    if (dramaArray.length === 0) {
      return 0
    } else {
      return calculateAverageMovieRate(dramaArray);
    }
};

calculateAverageDramaRate(MOVIES)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear (arr) {
    const byYearArray = [ ...arr ];
    byYearArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1;}
    }); return byYearArray;
}

orderByYear(MOVIES);



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

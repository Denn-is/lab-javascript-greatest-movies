
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

function countSpielbergDramaMovies(arr) {
    const spielbergArray = arr.filter((movie) => {
        return movie.director.includes("Spielberg")});
        const dramaArray = spielbergArray.filter((movie) => {
            return movie.genre.includes("Drama")});
    return dramaArray.length;
}

countSpielbergDramaMovies(MOVIES)

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    let allAlphabeticallyOrdered = [ ...arr ];
    let topTwenty = [];
    allAlphabeticallyOrdered.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else {
            return 0;
        }
    }); for (i = 0; i < 20 ; i++) {
        topTwenty.push(allAlphabeticallyOrdered[i].title)
    };  return topTwenty;
};

orderAlphabetically(MOVIES)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

console.log(MOVIES[21].duration.substring(0,1)*60);

console.log(Number(MOVIES[21].duration.substring(2,5)));

console.log(Number(MOVIES[21].duration.substring(0,1)*60) + Number(MOVIES[21].duration.substring(2,5)))


// BONUS Iteration: Best yearly rate average - Best yearly rate average

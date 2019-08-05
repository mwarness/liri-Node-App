// working code begins
require("dotenv").config();
let fs = require("fs");
// let input = process.argv[2];


let axios = require("axios");

//  links secret and id from keys
let keys = require("./keys.js");


let Spotify = require("node-spotify-api");

// new Spotify = creats a new instance or connection to the spotify server
var spotify = new Spotify(
  keys.spotify
);
let moment = require("moment");
let inquirer = require("inquirer");








// inquirer.prompt([
//   {
//     type: "input",
//     message: "Yo dawg! Whats your name?",
//     name: "username"
//   },
//   {
//     type: "list",
//     message: "I'm kind of a basic b (ot) but I can do some tricks. Wanna hear a song on spotify? Interested to know where and when your favorite bands are playing? Need some movie details so you can win movie trivia and finally beat your friend who thinks he knows everything? I got you covered. Pick your poison.",
//     choices: [ "spotify-this-song","concert-this", "movie-this", "do-what-it-says"],
//     name: "choice"
//   }
// ])

//   .then(function (userChoice) {
//     if (userChoice.choice === "spotify-this-song") {
//       console.log("------------------------");
//       console.log(`\nHello ${userChoice.username}`);
//       console.log("------------------------");}
//       inquirer.prompt([
//         {
//           type: "input",
//           message: "What song is your heart and soul inspired by?",
//           name: "track"
//         }
//       ])
//   })


// .then(function (result) {
//   if (result.track == "") {
//       result.track = "The Sign";
spotify.search({ type: 'track', query: input, limit: 5, })
  .then(function (response) {

    let data = response.tracks.items;
    for (let i = 0; i < data.length; i++) {
      console.log("--------------------------");

      console.log("Artist Name", data[i].artists[0].name);
      console.log("Song Name", data[i].name);
      console.log("Preview Url", data[i].preview_url);
      console.log("Album Name", data[i].album.name);

      console.log("--------------------------");



    }
  })
  .catch(function (err) {
    console.log(err);
  });
// spotify.search({ type: "track", query: result.track })
//     .then(function (response) {
//         console.log("\n---------------------");
//         fs.appendFileSync("log.txt", "\n-----------------------");
//         console.log(`Artist: ${response.tracks.items[2].album.artists[0].name}`);
//         fs.appendFileSync("log.txt", `\nArtist: ${response.tracks.items[2].album.artists[0].name}`);
//         console.log(`Song: ${response.tracks.items[2].name}`);
//         fs.appendFileSync("log.txt", `\nSong: ${response.tracks.items[2].name}`);
//         console.log(`Spotify Preview: ${response.tracks.items[2].album.external_urls.spotify}`);
//         fs.appendFileSync("log.txt", `\nSpotify Preview: ${response.tracks.items[2].album.external_urls.spotify}`);
//         console.log(`Album: ${response.tracks.items[2].album.name}`);
//         fs.appendFileSync("log.txt", `\nAlbum: ${response.tracks.items[2].album.name}`);
//         console.log("\n---------------------");
//         fs.appendFile("log.txt", `\nSong: ${result.track}`, function (err) {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(`Song ${result.track.toUpperCase()} appended to log.txt`);
//             }
//         })
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
//   }})

spotify.search({ type: 'track', query: input, limit: 5, })
  .then(function (response) {

    let data = response.tracks.items;
    for (let i = 0; i < data.length; i++) {
      console.log("--------------------------");

      console.log("Artist Name", data[i].artists[0].name);
      console.log("Song Name", data[i].name);
      console.log("Preview Url", data[i].preview_url);
      console.log("Album Name", data[i].album.name);

      console.log("--------------------------");



    }
  })
  .catch(function (err) {
    console.log(err);
  });



// reference code ends

// spotify.search({ type: 'track', query: input, limit: 5, })
//   .then(function (response) {

//     let data = response.tracks.items;
//     for (let i = 0; i < data.length; i++) {
//       console.log("--------------------------");

//       console.log("Artist Name", data[i].artists[0].name);
//       console.log("Song Name", data[i].name);
//       console.log("Preview Url", data[i].preview_url);
//       console.log("Album Name", data[i].album.name);

//       console.log("--------------------------");



//     }
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// dig through and console everything i need from spotify, comment out the spotify code, move on to the next api repeat. ONE THING AT A TIME!


//  omdb call and response begins
// axios
//   .get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
//   .then(function (response) {
    // If the axios was successful...
    // Then log the body from the site!
    // console.log("----------------------------");
    // console.log("Movie Title", response.data.Title);
    // console.log("Year", response.data.Year);
    // console.log("IMDB Rating", response.data.imdbRating);
    // console.log("Rotten Tomatoes Rating", response.data.Ratings[1].Value);
    // console.log("Country Produced In", response.data.Country);
    // console.log("Language", response.data.Language);
    // console.log("Plot", response.data.Plot);
    // console.log("Actors", response.data.Actors);

    // console.log("----------------------------");

  // })
  // .catch(function (error) {
  //   if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //   console.log(error.request);
    // } else {
      // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // });


// omdb call and response ends



// bandsintown call and response ends

// let artistName = input;
// axios
//   .get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp&date=upcoming")
//   .then(function (response) {
//     let date = moment(response.data[0].datetime).format('MM/DD/YYYY')
//     console.log(response.data);
    // If the axios was successful...
    // Then log the body from the site!
    // console.log("----------------------------");
    // console.log(response.data[0].venue.name);
    // console.log(response.data[0].venue.city);
    // console.log(response.data[0].venue.region);
    // console.log(response.data[0].venue.country);
    // console.log(date);


    // console.log("----------------------------");

  // })
  // .catch(function (error) {
    // if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //   console.log(error.request);
    // } else {
      // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // });






  // var pick = function(caseInput, input) {
  //   switch (caseInput) {
  //   case "concert-this":
  //   getMyBands(input);
  //   break;
  //   case "spotify-this-song":
  //   getMeSpotify(input);
  //   break;
  //   case "movie-this":
  //   getMeMovie(input);
  //   break;
  //   case "do-what-it-says":
  //   doWhatItSays();
  //   break;
  //   default:
  //   console.log("LIRI doesn't know that");
  //   }
  //   };


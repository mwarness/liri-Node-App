
// working on begins

// let input= process.argv[2];
// let inquirer = require("inquirer");
// let fs = require("fs");
// let axios = require("axios");
// let Spotify = require('node-spotify-api');
// let moment = require("moment");
// require("dotenv").config();


//  links secret and id from keys
// let keys = require("./keys")

// new Spotify = creats a new instance or connection to the spotify server
// let spotify = new Spotify(
//  keys.spotify
// );

//  spotify
  // .search({ type:'track', query:input, limit: 5,})
  // .then(function(response) {

    // let data =response.tracks.items;
    // for(let i = 0; i < data.length ; i++){
      // console.log("--------------------------"); 
      
        // console.log("Artist Name",data[i].artists[0].name);
        //  console.log("Song Name",data[i].name);
        //  console.log("Preview Url",data[i].preview_url);
        //  console.log("Album Name",data[i].album.name);
         
      // console.log("--------------------------"); 
         
        
      
    // }
  // })
  // .catch(function(err) {
    // console.log(err);
  // });



// dig through and console everything i need from spotify, comment out the spotify code, move on to the next api repeat. ONE THING AT A TIME!


//  omdb call and response begins



// axios
  // .get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
  // .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    // console.log("----------------------------");
    // console.log("Movie Title",response.data.Title);
    // console.log("Year",response.data.Year);
    // console.log("IMDB Rating",response.data.imdbRating);
    // console.log("Rotten Tomatoes Rating",response.data.Ratings[1].Value);
    // console.log("Country Produced In",response.data.Country);
    // console.log("Language",response.data.Language);
    // console.log("Plot",response.data.Plot);
    // console.log("Actors",response.data.Actors);

    // console.log("----------------------------");

  // })
  // .catch(function(error) {
    // if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    // } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      // console.log(error.request);
    // } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Error", error.message);
    // }
    // console.log(error.config);
  // });


  // omdb call and response ends



  // bandsintown call and response beginslet input= process.argv[2];



// let artistName =input;
// let moment = require("moment");
// moment().format();
// let fs = require("fs");


// axios
  // .get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp&date=upcoming")
  // .then(function(response) {
    // let date = moment(response.data[0].datetime).format('MM/DD/YYYY')
    // console.log(response.data);
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
  // .catch(function(error) {
    // if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    // } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      // console.log(error.request);
    // } else {
      // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  //   console.log(error.config);
  // });






  // Experimental code 





// working on begins

let input= process.argv[2];
// let inquirer = require("inquirer");
// let fs = require("fs");
let axios = require("axios");
let Spotify = require('node-spotify-api');
let moment = require("moment");
require("dotenv").config();


//  links secret and id from keys
let keys = require("./keys")

// new Spotify = creats a new instance or connection to the spotify server
let spotify = new Spotify(
 keys.spotify
);

 spotify
  .search({ type:'track', query:input, limit: 5,})
  .then(function(response) {

    let data =response.tracks.items;
    for(let i = 0; i < data.length ; i++){
      console.log("--------------------------"); 
      
        console.log("Artist Name",data[i].artists[0].name);
         console.log("Song Name",data[i].name);
         console.log("Preview Url",data[i].preview_url);
         console.log("Album Name",data[i].album.name);
         
      console.log("--------------------------"); 
         
        
      
    }
  })
  .catch(function(err) {
    console.log(err);
  });



// dig through and console everything i need from spotify, comment out the spotify code, move on to the next api repeat. ONE THING AT A TIME!


//  omdb call and response begins



axios
  .get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log("----------------------------");
    console.log("Movie Title",response.data.Title);
    console.log("Year",response.data.Year);
    console.log("IMDB Rating",response.data.imdbRating);
    console.log("Rotten Tomatoes Rating",response.data.Ratings[1].Value);
    console.log("Country Produced In",response.data.Country);
    console.log("Language",response.data.Language);
    console.log("Plot",response.data.Plot);
    console.log("Actors",response.data.Actors);

    console.log("----------------------------");

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });


  // omdb call and response ends



  // bandsintown call and response beginslet input= process.argv[2];





  let artistName =input;
axios
  .get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp&date=upcoming")
  .then(function(response) {
    let date = moment(response.data[0].datetime).format('MM/DD/YYYY')
    console.log(response.data);
    // If the axios was successful...
    // Then log the body from the site!
    console.log("----------------------------");
    console.log(response.data[0].venue.name);
    console.log(response.data[0].venue.city);
    console.log(response.data[0].venue.region);
    console.log(response.data[0].venue.country);
    console.log(date);
   

    console.log("----------------------------");
    
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
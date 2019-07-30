// hide keys for spotify access
console.log("reading keys");
// exports id and and secret from .env file
exports.spotify = {
    id: process.env.SPOTIFY_ID, 
    secret: process.env.SPOTIFY_SECRET

};
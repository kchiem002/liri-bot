require("dotenv").config()
const keys = require("./keys.js")
const axios = require('axios')
const fs = require('fs')
const moment = require('moment')
const Spotify = require('node-spotify-api')
const spotify = new Spotify(keys.spotify)

const [, , command, ...searchInput] = process.argv

const searchMovie = () => {
    searchItem = searchInput.join(' ')
    // console.log(searchItem)
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=faed73eb&t=${searchItem}`)
        .then(({ data: {Title, Year, imdbRating, Country, Language, Plot, Ratings, Actors} }) => {
            console.log(`
                Title: ${Title}
                Year: ${Year}
                IMDB Rating: ${imdbRating}
                Rotten Tomatoes Rating: ${Ratings[2].Value}
                Production Location: ${Country}
                Language: ${Language}
                Plot: ${Plot}
                Actors: ${Actors}
                `)
        })
        .catch(e => console.log(e))
}

const searchConcert = () => {
    searchItem = searchInput.join('')
    // console.log(searchItem)
    axios.get(`https://rest.bandsintown.com/artists/${searchItem}/events?app_id=codingbootcamp`)
        .then(artist => {
            for (let i = 0; i < artist.data.length; i++) {
                let concertDateTime = artist.data[i].datetime
                let concertDate = concertDateTime.slice(0, 10)
                console.log(`
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Result ${i+1} of ${artist.data.length}

                Name of Venue: ${artist.data[i].venue.name}
                City: ${artist.data[i].venue.city}
                Date: ${concertDate}
                `)
            }
        })
}

const searchSong = () => {
    searchItem = searchInput.join(' ')
    console.log(searchItem)
    spotify.search({ type: 'track', query: `${searchItem}` }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
        console.log(`
        ~~~~~~~~~~
        Artist(s): ${data.tracks.items[0].artists[i].name}`)
        }
        console.log(`
        Song Name: ${data.tracks.items[0].name}
        Preview: ${data.tracks.items[0].preview_url}
        Album: ${data.tracks.items[0].album.name}
        ~~~~~~~~~~
        `)
    //   console.log(data); 
      });
}

const doSomething = () => {
    fs.readFile(`random.txt`, 'utf8', (e, data) => {
        if (e) {
            console.log(e)
        } 
        else {
            newArr = data.split(',')
            console.log(newArr[0])
            console.log(newArr[1])
            searchItem = newArr[1]

            if (newArr[0] === "spotify-this-song") {
                searchSong()
            }

        }
    })
}

switch (command) {
    case "movie-this":
        searchMovie()
    break
    case "concert-this":
        searchConcert()
    break
    case "spotify-this-song":
        searchSong()
    break
    case "do-what-it-says":
        doSomething()
    break
}

// bonus: logging each command
logItem = searchInput.join(' ')
logCommandLine = 'node liri.js' + ' ' + command + ' ' + logItem
fs.appendFile('log.txt', logCommandLine, e => {
    if (e) {
      console.log(e)
    }
  })
# Welcome to LIRI Bot!

## What is LIRI Bot?
LIRI Bot is like iPhone's SIRI. However, instead of utilizing speech interpretation like SIRI, LIRI uses language interpretation. LIRI is a command line node app that takes in parameters you type into the terminal and returns data.

## What can LIRI Bot do?
Using the command line (terminal), LIRI will be able to return data to you from three different APIs:\
    1. OMDB - Input a movie name and LIRI will return data on that movie fetched from the OMDB API.\
    2. Bands in Town - Input an artist name and LIRI will return data on upcoming concerts for that artist\
    3. Spotify - Input a song name and LIRI will return data on that song\
You can also write command in a text file and LIRI will be able to read that text file and run your command.\
    4. Text File - You can tell LIRI to run the command you wrote in the text file\
LIRI will also log all your commands in a 'log.txt' file in case you need to look up your search history\

## How do I use LIRI Bot?

###**Step 1: Accessing LIRI Bot from Terminal**
First, go into the LIRI Bot folder from your terminal, this one is called **liri-bot**
Always use the following prefix to access the **liri.js** (where all the JS code is stored) file from the **liri-bot** folder\
    
    node liri.js\

![Liri Step 1](/images/liri-step-1.png)


###**Step 2: Use a Command**
LIRI can understand 4 commands:\
    > movie-this\
    > concert-this\
    > spotify-this-song\
    > do-what-it-says\

#### Search Movie Details
Search Syntax: node liri.js movie-this <movie name>
![Liri Step 2 Movie](/images/liri-step-2-movie.png)





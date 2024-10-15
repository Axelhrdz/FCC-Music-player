// Getting button controls elements
const playButton = document.getElementById ('play');
const shuffleButton = document.getElementById ('shuffle');
const addButton = document.getElementById ('add');
const dowloadButton = document.getElementById ('download');

//Play thumbn
const playTitle = document.getElementById('playTitle');

//playlsit container
const playlist = document.querySelector('.playlist');
const ulSongs = document.getElementById('songs');

const allSongs = [
    {
      id: 0,
      title: "Scratching The Surface",
      artist: "Artist1",
      duration: "4:25",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
      id: 1,
      title: "Can't Stay Down",
      artist: "Artist2",
      duration: "4:15",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
    {
      id: 2,
      title: "Still Learning",
      artist: "Artist3",
      duration: "3:51",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
    {
      id: 3,
      title: "Cruising for a Musing",
      artist: "Artist4",
      duration: "3:34",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
      id: 4,
      title: "Never Not Favored",
      artist: "Artist5",
      duration: "3:35",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
      id: 5,
      title: "From the Ground Up",
      artist: "Artist6",
      duration: "3:12",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
      id: 6,
      title: "Walking on Air",
      artist: "Artist8",
      duration: "3:25",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
      id: 7,
      title: "Can't Stop Me. Can't Even Slow Me Down.",
      artist: "Artist9",
      duration: "3:52",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
      id: 8,
      title: "The Surest Way Out is Through",
      artist: "Artist10",
      duration: "3:10",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
      id: 9,
      title: "Chasing That Feeling",
      artist: "Artist12",
      duration: "2:43",
      src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
  ];

// Access to Audio API

const audio = new Audio();

//  Getting songs list
const songs = document.getElementById('songs');
const songTitle = document.querySelector('.songTitle');
const songActions = document.querySelector('.songActions');
const artist = document.querySelector('.artist');
const minutes = document.querySelector('.minutes');


console.log(songTitle)
console.log(songActions)
console.log(artist)
console.log(minutes)

const renderSongs = (array) => {
    const htmlSongs = [...array];
    htmlSongs.forEach((song, index) => {
        const songItem = document.createElement('li');
        songItem.classList.add('song');
        songItem.innerHTML = 
        `
        <span class="songTitle">${song.title}</span>
            <div class="songActions">
                <span id="artist">${song.artist}</span>
                <span id="minutes">${song.duration}</span>
                <i id="delete${index}" class="fa-solid fa-delete-left"></i> 
            </div>
        `;
        ulSongs.append(songItem);
    })
}
renderSongs(allSongs);
 
//Play function -------

//defaul/first song
let songSelected = allSongs[0].title;
const defaultSong = "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3";
audio.src = defaultSong;


let isPlaying = false;

const playFunction = () => {
  playTitle.innerText = songSelected;
  isPlaying = isPlaying ? false : true;
  console.log(isPlaying);

  if(isPlaying){
    audio.play();
  } else {
    audio.pause();
  }
}

playButton.addEventListener('click', function(){
  playFunction();
})


playlist.addEventListener('click', function(e){
  // console.log(e.target);
  songSelected = e.target.innerText;
  console.log(songSelected);
  playTitle.innerText = songSelected;

  allSongs.forEach(e => {
    // console.log(e.title)

    if(e.title === songSelected){
      // console.log(true);
      isPlaying = true;
      audio.src = e.src;
      audio.play();
    } else return;
  })
})
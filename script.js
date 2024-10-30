// Getting button controls elements
const playButton = document.getElementById ('play');
const shuffleButton = document.getElementById ('shuffle');
const addButton = document.getElementById ('add');
const dowloadButton = document.getElementById ('download');

//Play thumbn
const playTitle = document.getElementById('playTitle');
const playSummary = document.getElementById('playSummary');
const playDuration = document.getElementById('playDuration');

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
const songActions = document.querySelector('.songActions');
const artist = document.querySelector('.artist');
const minutes = document.querySelector('.minutes');



//Render songs
let isShuffle = false;
let shuffledArray;
let currentSongList;
let htmlSongs;
const renderSongs = (array) => {
  htmlSongs = ' '
  htmlSongs = [...array];
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

renderSongs(currentSongList = isShuffle ? shuffledArray : allSongs);


shuffleButton.addEventListener('click', function(){
  ulSongs.innerHTML = ' ';
  isShuffle = isShuffle ? false : true;
  // console.log(isShuffle);

  if(isShuffle){
    shuffledArray = [...allSongs].sort((a,b) => 0.5 - Math.random());
    renderSongs(currentSongList = isShuffle ? shuffledArray : allSongs);

  } else {
    renderSongs(currentSongList = isShuffle ? shuffledArray : allSongs);
  }
})































































































































































// console.log(songs);
// console.log(songActions)
// console.log(artist)
// console.log(minutes)

// let isShuffle = false;
// let currentSongList = allSongs;

// const renderSongs = (array) => {
//     ulSongs.innerHTML = '';
    

//     currentSongList = isShuffle ? shuffledArray : allSongs;

//     const htmlSongs = [...array];
//     htmlSongs.forEach((song, index) => {
//         const songItem = document.createElement('li');
//         songItem.classList.add('song');
//         songItem.innerHTML = 
//           `
//           <span class="songTitle">${song.title}</span>
//               <div class="songActions">
//                   <span id="artist">${song.artist}</span>
//                   <span id="minutes">${song.duration}</span>
//                   <i id="delete${index}" class="fa-solid fa-delete-left"></i> 
//               </div>
//           `;
//           ulSongs.append(songItem);
//       })

//       const songTitle = document.querySelectorAll('.songTitle');
//       console.log(songTitle);

//       songTitle.forEach(song => {
//         song.addEventListener('click', function(e){
//           console.log(song);
//         })
//       })


//     // const htmlSongs = [...array];
//     // htmlSongs.forEach((song, index) => {
//     //     const songItem = document.createElement('li');
//     //     songItem.classList.add('song');
//     //     songItem.innerHTML = 
//     //     `
//     //     <span class="songTitle">${song.title}</span>
//     //         <div class="songActions">
//     //             <span id="artist">${song.artist}</span>
//     //             <span id="minutes">${song.duration}</span>
//     //             <i id="delete${index}" class="fa-solid fa-delete-left"></i> 
//     //         </div>
//     //     `;
//     //     ulSongs.append(songItem);
//     // })
// }
// renderSongs(currentSongList);

// //Getting only song list -----









// let shuffledArray;
// const shuffleV2 = (array)=> {
  
//     // ulSongs.innerHTML = '';
//     shuffledArray = array.sort((a,b) => 0.5 - Math.random());
//     console.log(shuffledArray);

//     // const htmlSongs = [...shuffledArray];
//     // htmlSongs.forEach((song, index) => {
//     //   const songItem = document.createElement('li');
//     //   songItem.classList.add('song');
//     //   songItem.innerHTML = 
//     //     `
//     //     <span class="songTitle">${song.title}</span>
//     //         <div class="songActions">
//     //             <span id="artist">${song.artist}</span>
//     //             <span id="minutes">${song.duration}</span>
//     //             <i id="delete${index}" class="fa-solid fa-delete-left"></i> 
//     //         </div>
//     //     `;
//     //     ulSongs.append(songItem);
//     // })

//   }

// shuffleButton.addEventListener('click', function(){
//   isShuffle = isShuffle ? false : true;
//   console.log(isShuffle);
//   renderSongs(currentSongList);
// })





 
// //Play function -------

// //defaul/first song
// let songSelected;
// let defaultSong;





// let isPlaying = false;

// const playFunction = () => {

// currentSongList = isShuffle ? shuffledArray : allSongs;
// songSelected = currentSongList[0].title;
// defaultSong = currentSongList[0].src;
// audio.src = defaultSong;
// playTitle.innerText = songSelected; 
// playSummary.innerText = allSongs[0].artist;
// playDuration.innerText = allSongs[0].duration;

//   // playTitle.innerText = songSelected; 
//   // playSummary.innerText = allSongs[0].artist;
//   // playDuration.innerText = allSongs[0].duration;

//   isPlaying = isPlaying ? false : true;
//   console.log(isPlaying);
//   pausePlaytoggle(isPlaying);

//   if(isPlaying){
//     audio.play();
//   } else {
//     audio.pause();
//   }
// }

// const pausePlaytoggle = (playing) => {
//     if(playing){
//       playButton.classList.remove('fa-play');
//       playButton.classList.add('fa-pause');
//     } else {
//       playButton.classList.remove('fa-pause');
//       playButton.classList.add('fa-play');
//     }
// }


// //Shuffle function ---
// // let isShuffle = true;
// // let shuffledArray = null;
// // const shuffleV2 = (array, state)=> {
// //   if(state){
// //     ulSongs.innerHTML = '';
// //     shuffledArray = array.sort((a,b) => 0.5 - Math.random());
// //     console.log(shuffledArray);

// //     const htmlSongs = [...shuffledArray];
// //     htmlSongs.forEach((song, index) => {
// //       const songItem = document.createElement('li');
// //       songItem.classList.add('song');
// //       songItem.innerHTML = 
// //         `
// //         <span class="songTitle">${song.title}</span>
// //             <div class="songActions">
// //                 <span id="artist">${song.artist}</span>
// //                 <span id="minutes">${song.duration}</span>
// //                 <i id="delete${index}" class="fa-solid fa-delete-left"></i> 
// //             </div>
// //         `;
// //         ulSongs.append(songItem);
// //     })

// //   }
// // }

// // shuffleButton.addEventListener('click', function(){
// //   shuffleV2(allSongs, isShuffle);
// // })




// playButton.addEventListener('click', function(){
//   playFunction();
// })


// // songTitle.forEach(song => {
// //   song.addEventListener('click', function(e){

    

// //     songSelected = song.innerHTML;
// //     currentSongList.forEach(ele => {
// //       if(ele.title === songSelected){
// //         isPlaying = true;
// //         playTitle.innerText = songSelected;
// //         playSummary.innerText = ele.artist;
// //         playDuration.innerText = ele.duration;
// //         audio.src = ele.src;
// //         pausePlaytoggle(isPlaying);
// //         audio.play();
// //       } else return;
// //     })
// //   })
// // })
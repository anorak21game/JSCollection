const tabs = document.querySelector(".tabs");
const tabsBtns = tabs.querySelectorAll(".tabs__btn");
const tabsContents = tabs.querySelectorAll(".tabs__content");

function displayCurrentTab(current) {
  for (let i = 0; i < tabsContents.length; i++) {
    tabsContents[i].style.display = (current === i) ? "block" : "none";
  }
}
displayCurrentTab(0);

tabs.addEventListener("click", event => {
  if (event.target.className === "tabs__btn") {
    for (let i = 0; i < tabsBtns.length; i++) {
      if (event.target === tabsBtns[i]) {
        displayCurrentTab(i);
        break;
      }
    }
  }
});

// const buttons = Array.from(document.querySelectorAll("button"));

// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         btn.classList.toggle("active");
//     });
// });




// const SETTINGS = {
    
// }

// class Duration {
//     constructor() {
//         let duration = 0;

//         this.setDuration = function(duration) {
//             duration = duration * 60;
//         }

//         this.getDuration = function() {
//             return duration;
//         }

//         this.decrement = function() {
//             duration++;
//             return duration;
//         }
//     }
// }

// class Display {


// }

// class Song {
//     constructor(title, artist, duration, image) {
//         this.title = title;
//         this.artist = artist;
//         this.duration = duration;
//         this.imageUrl = image;
//     }
// }

// class AbstractPlayer {
//     constructor() {
//         this.songs = []
//         this.nowPlayingIndex = 0
//         this.$header = $('#header')
//         this.$playlist = $('#playlist')
//         this.$stop = $('#stop')
//         this.$play = $('#play')
//       }

//       add(songs) {
//         songs.forEach(song => {
//           this.songs.push(song)
//         })
//       }

//       render() {
//         this.renderPlaylist()
//         this.renderHeader()
//       }

//       play() {
//         this.songs[this.nowPlayingIndex].play()
//         this.$play.hide()
//         this.$stop.show()
//         this.render()
//       }

//       stop() {
//         this.songs[this.nowPlayingIndex].stop()
//         this.$stop.hide()
//         this.$play.show()
//         this.render()
//       }

//       previous() {
//         this.stop()
//         this.nowPlayingIndex--
//         if(this.nowPlayingIndex < 0) {
//           this.nowPlayingIndex = (this.songs.length - 1)
//         }
//         this.play()
//       }

//       next() {
//         this.stop()
//         this.nowPlayingIndex++
//         if(this.nowPlayingIndex === this.songs.length) {
//           this.nowPlayingIndex = 0
//         }
//         this.play()
//       }

//       select(index) {
//         this.stop()
//         this.nowPlayingIndex = index
//         this.play()
//       }

//       renderPlaylist() {
//         this.$playlist.html('')
//         this.songs.forEach( (song, index)=> {
//           this.$playlist.append(song.toHTML('song', index))
//         })
//       }

//       renderHeader() {
//         this.$header.html('')
//         this.$header.html(this.songs[this.nowPlayingIndex].toHTML('header'))
//       }

//       render() {
//         this.renderPlaylist()
//         this.renderHeader()
//       }
// }

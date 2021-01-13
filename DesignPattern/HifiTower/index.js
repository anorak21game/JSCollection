function displayDate() {
    document.getElementById("display").innerHTML = Date();
}

// console.clear();

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// var display = document.getElementById("controller");
// var buttons = display.getElementsByClassName("button");
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

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

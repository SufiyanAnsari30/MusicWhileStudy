const image= document.getElementById("photo");
const backImage= document.getElementById("full");
const title=document.querySelector('h2');
const artist=document.querySelector('h3');
const music=document.querySelector('audio');
const durationEl=document.getElementById("duration");
const currentTimeEl=document.getElementById("current-time");
const progressContainer=document.getElementById("progress-container");
const progressBar=document.getElementById("progress")
const prevBtn=document.getElementById("prev");
const playBtn=document.getElementById("play");
const nextBtn=document.getElementById("next");


const songs=[
    {
        name:'Shinchan',
        displayName:'Shinchan',
        artist:'Muthu',
        color:'#000046'
    },

    {
        name:'Doraemon',
        displayName:'Doraemon',
        artist:'Muthu',
        color:'rgb(253, 157, 0)'
    },

    {
        name:'Pokemon',
        displayName:'Pokemon',
        artist:'Muthu',
        color:' linear-gradient(to left, #0f9b0f, #000000)'
    },

    {
        name:'Ninja Hattori',
        displayName:'Ninja Hattori ',
        artist:'Muthu',
        color:'rgba(251, 6, 6, 0.979)'
    },

    {
        name:'Kiteretsu',
        displayName:'Kiteretsu',
        artist:'Muthu',
        color:'rgb(2, 161, 23)'
    },

    {
        name:'Ben10',
        displayName:'Ben10',
        artist:'Muthu',
        color:'rgba(0, 20,255, 0.9)'
    },
   {
        name:'Perman',
        displayName:'Perman',
        artist:'Muthu',
        color:'rgba(0, 20,255, 0.9)'
    },
   {
        name:'Tom and Jerry',
        displayName:'Tom and Jerry',
        artist:'Muthu',
        color:'rgba(0, 20,255, 0.9)'
    },

    {
        name:'Shinchan ending song',
        displayName:'Shinchan ending song',
        artist:'Muthu',
        color:'rgba(0, 20,255, 0.9)'
    },
   {
        name:'Doraemon ending song',
        displayName:'Doraemon ending song',
        artist:'Muthu',
        color:'rgba(0, 20,255, 0.9)'
    },





]






let isPlaying=false;

function playSong(){
    isPlaying=true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute("title","pause");
    music.play();
}

function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute("title","play")
    music.pause()
}

playBtn.addEventListener('click',() => ( isPlaying ? pauseSong() : playSong()));


//update the dom

function loadSong(song){
    artist.textContent=song.name;
    title.textContent=song.displayName;
    music.src=`music/${song.name}.mp3`
    image.src=`img/${song.name}.jpg`;
    document.body.style.background=song.color
}

let songIndex=0
loadSong(songs[songIndex]);


function prevSong(){

    songIndex--;

    if(songIndex<0){
        songIndex=songs.length-1
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();

}


function nextSong(){

    songIndex++;

    if(songIndex>songs.length-1){
        songIndex=0
    }

    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();

}

function updateProgress(e){
    if (isPlaying) {
        const { duration, currentTime } = e.srcElement;
        // update progress bar width

        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
          durationSeconds = `0${durationSeconds}`;
        }
        // to avoid NaN
        if (durationSeconds) {
          durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        // Calculate display for currentTime
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
          currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
      }
}


function setProgressBar(e){
    
    const width =this.clientWidth;
      console.log('width',width);
    const clickX=e.offsetX;
    console.log('clickX',clickX);

     const { duration }=music;
    music.currentTime=(clickX/width)*duration;
    
}






prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener("click",setProgressBar);

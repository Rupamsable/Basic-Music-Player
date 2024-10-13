import listSong from "./Song_list.js";
import { addSongToPlaylist, init as initPlayList } from "./PlayList.js";

export function renderCurrentSong(audio,song){
    // console.log("Hello");
    // console.log(song);
    const songLength=listSong.arrSong.length;
    // console.log(songLength);

    const Songs = listSong.arrSong;
//     <div class="imgCard">
//     <div class="image">
//     <img src="./images new.jpg">
//     </div>
//     <h3> Off</h3>
//     <h6>ed sheeren</h6>
// </div> 
    const Music = document.querySelector(".songCard");
    Music.innerHTML = ""; // Clear existing songs

    const cardImg = document.createElement("div");
    cardImg.classList.add("imgCard");

    const img = document.createElement("div");
    img.classList.add("image");

    const imgTag = document.createElement("img");
    imgTag.src = song.img;

    const h3 = document.createElement("h3");
    h3.textContent=song.name;

    const h6 = document.createElement("h6");
    h6.textContent=song.artist;

    img.appendChild(imgTag);
    cardImg.appendChild(img);
    cardImg.appendChild(h3);
    cardImg.appendChild(h6);
    Music.appendChild(cardImg);

    const songPlay = document.createElement("div");
    songPlay.classList.add("playSong");

    const audioEle = document.createElement("audio");
    audioEle.src=song.source;
    audioEle.controls=true;
    songPlay.appendChild(audioEle);
    Music.appendChild(songPlay);
    // const currentAudio = document.querySelector("audio.playing");

    // if (currentAudio && currentAudio !== audioEle) {
    //     currentAudio.pause();
    //     currentAudio.classList.remove("playing");
    // }
    
    // audioEle.play();
    // audioEle.classList.add("playing");

    const songRev = document.createElement("div");
    songRev.classList.add("preNextSong");

    const revButton = document.createElement("button");
    revButton.classList.add("pre");
    revButton.textContent=`<<`;

    const nexButton = document.createElement("button");
    nexButton.classList.add("next");
    nexButton.textContent=`>>`;

    revButton.addEventListener("click", () => {
        prevSong(song,song.id,songLength);
    });

    nexButton.addEventListener("click", () => {
        nexSong(song,song.id,songLength);
    });

    songRev.appendChild(revButton);
    songRev.appendChild(nexButton);
    Music.appendChild(songRev);

    const currentAudio = document.querySelector("audio.playing");
    console.log(currentAudio);

    if (currentAudio && currentAudio !== audioEle) {
        currentAudio.pause();
        currentAudio.classList.remove("playing");
    }
    
    audioEle.play();
    audioEle.classList.add("playing");

    const addSongDiv = document.createElement("div");
    addSongDiv.classList.add("addSongPlaylist");

    const addListButton = document.createElement("button"); 
    addListButton.classList.add("addSong");
    addListButton.textContent=`Add To Playlist`;

    addListButton.addEventListener("click", (event) => {
        addtoPlaylist(song);
    });

    addSongDiv.appendChild(addListButton);
    Music.appendChild(addSongDiv);


}

function addtoPlaylist(song){
    addSongToPlaylist(song);
}




function prevSong(song,songs,songLength){
    console.log(songs)
    if(songs > 0){
        songs--;
    }
    else{
        songs = songs - 1;
    }
    const audio = new Audio(listSong.arrSong[songs].src);
    renderCurrentSong(audio, listSong.arrSong[songs]);
}

function nexSong(song,songs,songLength){
    if (songs < songLength- 1) {
        songs++;
    } else {
        songs = 0; // Loop to the first song
    }
    const audio = new Audio(listSong.arrSong[songs].src);
    renderCurrentSong(audio, listSong.arrSong[songs]);
}

export function init(){
    document.addEventListener("DOMContentLoaded",()=>{
        if (listSong.arrSong.length > 0) {
            const firstSong = listSong.arrSong[0];
            const audio = new Audio(firstSong.source);
            renderCurrentSong(audio, firstSong);
        }
    });
}
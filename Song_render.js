
import listSong from "./Song_list.js";
import { filterSongs } from "./filter_Song.js";
import {renderCurrentSong} from "./songCard.js";

function showSongs(filteredSongs = listSong.arrSong) {
    const allSong = document.querySelector(".all-song-div");
    allSong.innerHTML = ""; // Clear existing songs
    const songCard = document.createElement("ul");
    songCard.classList.add("song-card");

    filteredSongs.forEach(song => {
    
        const li = document.createElement("li");
        li.classList.add("list")

        const songTitle = document.createElement("span");
        songTitle.textContent = song.name;

        const songArtist = document.createElement("span");
        songArtist.textContent = `by ${song.artist}`;

        const audio = document.createElement("audio");
        audio.src = song.source;

        // Add error handling
        audio.addEventListener('error', () => {
            console.error(`Error loading audio: ${song.source}`);
        });

        li.addEventListener("click", () => {
            renderCurrentSong(audio,song);
        });
        
        li.appendChild(songTitle);
        li.appendChild(songArtist);
        li.appendChild(audio);
        songCard.appendChild(li);
        allSong.appendChild(songCard);
    });
}



export function init(){
    document.addEventListener("DOMContentLoaded", () => {
        showSongs();
        const genreFilter = document.getElementById("genre-filter");
        genreFilter.addEventListener("change", () => {
            const selectedGenre = genreFilter.value;
            const filteredSongs = filterSongs(listSong.arrSong, selectedGenre);
            showSongs(filteredSongs);
        });

        if (listSong.arrSong.length > 0) {
            const firstSong = listSong.arrSong[0];
            const audio = new Audio(firstSong.source);
            renderCurrentSong(audio, firstSong, 0); // Load first song by default
        }
    });
}


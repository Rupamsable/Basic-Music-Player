
let playlists = [];
let songPlaylists = {};
let selectedPlaylist = null;

function createList() {
    const listPlay = document.querySelector(".playList");

    const listCreate = document.createElement("div");
    listCreate.classList.add("createPlayList");

    const inputEl = document.createElement("input");
    inputEl.placeholder = `Enter Playlist Name`;
    inputEl.type = "text";

    const create = document.createElement("button");
    create.classList.add("createList");
    create.textContent = `Create Playlist`;

    listCreate.appendChild(inputEl);
    listCreate.appendChild(create);
    listPlay.appendChild(listCreate);

    // Playlist Div started
    // Current Playlist section

    const playList = document.createElement("div");
    playList.classList.add("playListCard");
    // console.log("hello create playlist");

    const currentPlaylist = document.createElement("div");
    currentPlaylist.classList.add("currentPlaylist");

    const h3 = document.createElement("h3");
    h3.textContent = `Current Playlist`;

    const ul = document.createElement("ul");
    ul.classList.add("currentUl");

    currentPlaylist.appendChild(h3);
    currentPlaylist.appendChild(ul);
    playList.appendChild(currentPlaylist);
    listPlay.appendChild(playList);

    // All Playlist Section 

    const allPlayList = document.createElement("div");
    allPlayList.classList.add("allPlayLists");

    // console.log("hello create allplaylist");

    const allh3 = document.createElement("h3");
    allh3.textContent = `All Playlist`;

    const allPlaylistUl = document.createElement("ul");
    allPlaylistUl.classList.add("allPlayUl");

    allPlayList.appendChild(allh3);
    allPlayList.appendChild(allPlaylistUl);
    playList.appendChild(allPlayList);
    listPlay.appendChild(playList);

    // Create Playlist Click event
    create.addEventListener("click", () => {
        createPlaylist(inputEl.value);
    });
}

function createPlaylist(name) {
    if (name.trim() === "") {
        alert("Please enter a valid playlist name.");
        return;
    }

    playlists.push(name);
    songPlaylists[name] = []; // Initialize an empty array for the new playlist
    const ul = document.querySelector(".allPlayUl");
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);

    li.addEventListener("click", () => {
        selectPlaylist(name);
    });

    console.log(name);
}

function selectPlaylist(name) {
    selectedPlaylist = name;
    // alert(`Selected Playlist: ${name}`);
    // console.log(`Selected Playlist: ${name}`);
    updateCurrentPlaylistUI();
}

function updateCurrentPlaylistUI() {
    const currentUl = document.querySelector(".currentUl");
    currentUl.innerHTML = ""; // Clear the current list

    const songs = songPlaylists[selectedPlaylist] || [];
    songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = `${song.name} by ${song.artist}`;
        currentUl.appendChild(li);
    });
}

export function addSongToPlaylist(song) {
    if (!selectedPlaylist) {
        alert("Please select a playlist first.");
        return;
    }

    // console.log(`Adding song to playlist ${selectedPlaylist}:`, song);
    songPlaylists[selectedPlaylist].push(song);
    updateCurrentPlaylistUI();
}

export function init() {
    document.addEventListener("DOMContentLoaded", () => {
        createList();
    });
}

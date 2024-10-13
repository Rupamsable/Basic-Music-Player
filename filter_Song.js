function filterSongs(songs, genre) {
    if (genre === "all") {
        return songs;
    }
    return songs.filter(song => song.genre === genre);
}

export { filterSongs };

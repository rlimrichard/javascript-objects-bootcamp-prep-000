var playlist = {'artist' : 'song'}

function updatePlaylist(playlist, artistName, songTitle)
{
    playlist[artistName] = songTitle;
}

function updatePlaylist(playlist, artistName){
    delete playlist[artistName]
}

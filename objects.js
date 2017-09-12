var playlist = new Object();

function updatePlaylist(playlist, artistName, songTitle)
{
    playlist[artistName] = songTitle
    console.log('updatePlaylist: ' + playlist)
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName]
}

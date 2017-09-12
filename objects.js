var playlist = new Object();
playlist['artist'] = 'my song'

function updatePlaylist(playlist, artistName, songTitle)
{
    playlist[artistName] = songTitle
    console.log('updatePlaylist: ' + playlist)
}

function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName]
}

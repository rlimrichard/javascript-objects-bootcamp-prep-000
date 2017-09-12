var playlist = new Object();

function updatePlaylist(playlist1, artistName, songTitle)
{
    playlist1[artistName] = songTitle
    console.log('updatePlaylist: ' + playlist)
}

function removeFromPlaylist(playlist1, artistName){
    delete playlist1[artistName]
}

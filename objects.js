var playlist = {'artist' : 'song'}

function updatePlaylist(playlist1, artistName, songTitle)
{
    playlist1[artistName] = songTitle
}

function updatePlaylist(playlist1, artistName){
    delete playlist1[artistName]
}

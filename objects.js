var playlist = {'artist' : 'song'}

function updatePlaylist(playlist1, artistName, songTitle)
{
    return playlist1[artistName] = songTitle
}

function removeFromPlaylist(playlist1, artistName){
    return delete playlist1[artistName]
}

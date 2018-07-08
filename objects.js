<<<<<<< HEAD
var playlist = { beethoven:'symphony', mozart: 'concerto', chopin:'nocturne'} 

function updatePlaylist(playlist, singer, song) {
  playlist[singer] = song
  return playlist
}

function removeFromPlaylist(playlist, singer) {
  delete playlist[singer] 
=======
var playlist = { beethoven:"symphony", mozart: "concerto", chopin:"nocturne"  } 
function updatePlaylist  (playlist, bach, mass) {
>>>>>>> ae213825167fc50b4e838da2f8fdba7d515d5174
  return playlist
}

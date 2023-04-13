const songs = document.querySelectorAll('audio');

songs.forEach(song => {
  const playBtn = document.createElement('button');
  playBtn.innerText = 'Play';
  playBtn.addEventListener('click', () => {
    song.play();
  });
  song.parentElement.appendChild(playBtn);

  const pauseBtn = document.createElement('button');
  pauseBtn.innerText = 'Pause';
  pauseBtn.addEventListener('click', () => {
    song.pause();
  });
  song.parentElement.appendChild(pauseBtn);
});

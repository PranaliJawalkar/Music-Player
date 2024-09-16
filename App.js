document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const trackList = document.getElementById('track-list');
    const trackTitle = document.getElementById('track-title');
    const artistName = document.getElementById('artist-name');

    let currentTrackIndex = 0;
    const tracks = [...trackList.getElementsByTagName('li')];

    function loadTrack(index) {
        const track = tracks[index];
        audioPlayer.src = track.getAttribute('data-src');
        trackTitle.textContent = track.getAttribute('data-title');
        artistName.textContent = track.getAttribute('data-artist');
        audioPlayer.play();
    }

    function playTrack() {
        audioPlayer.play();
    }

    function pauseTrack() {
        audioPlayer.pause();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    }

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    prevButton.addEventListener('click', prevTrack);
    nextButton.addEventListener('click', nextTrack);

    tracks.forEach((track, index) => {
        track.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
        });
    });

    // Load the first track initially
    loadTrack(currentTrackIndex);
});

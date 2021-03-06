import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


const onPlay = function (data) {
    const playerSeconds = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, playerSeconds);
}

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        
        default:
            // some other error occurred
            break;

    }
});







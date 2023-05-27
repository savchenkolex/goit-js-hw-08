import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframeEl = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframeEl);

function saveCurrentTime({seconds}){
    localStorage.setItem("videoplayer-current-time",seconds);
}

const SavedTime = Number(localStorage.getItem("videoplayer-current-time"));
 
iframePlayer.on("timeupdate",throttle(saveCurrentTime,1000));
iframePlayer.setCurrentTime(SavedTime);
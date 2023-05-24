import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframeEl = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframeEl);

function saveCurrentTime({seconds}){
    localStorage.setItem("videoplayer-current-time",seconds);
}

function setSavedTime(){
    return Number(localStorage.getItem("videoplayer-current-time"));
}

iframePlayer.on("timeupdate",throttle(saveCurrentTime,900));
iframePlayer.setCurrentTime(setSavedTime());
const clicker = document.getElementById('cookie');
const clickCount = document.getElementById('clicker__counter');
const speedShow = document.getElementById('click__speed');
let currentTime = new Date().getTime();
let newClick, speedCount = 0;
const eventClick = () => {
   clickCount.textContent++;
   clicker.width = '230';
   newClick = new Date().getTime();
};
const oddClick = () => {
   clickCount.textContent++;
   clicker.width = '200';
   newClick = new Date().getTime();
};
clicker.onclick = () => {
   (clickCount.textContent % 2 === 0) ? eventClick() : oddClick();
   speedCount++;
   speedShow.textContent = (speedCount / ((newClick - currentTime) / 1000)).toFixed(2);
}

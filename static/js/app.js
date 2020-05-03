var coin = new Audio("/static/sounds/coin01.mp3");

function click_box() {
    coin.currentTime = 0;
    coin.play();
}
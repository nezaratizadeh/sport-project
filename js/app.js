const SEARCH_BTN = document.getElementById('searchBtn');


function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 2000);
}

var images = [], x = -1;
images[0] = "images/footballBigImage.jpg";
images[1] = "images/volleyballBigImage.jpg";
images[2] = "images/baseballBigImage.jpg";
images[3] = "images/basketballBigImage.jpg";
images[4] = "images/skateBigImage.jpg";
images[5] = "images/tennisBigImage.jpg";


function search() {
    alert("Search button is not working properly!");


}
SEARCH_BTN.addEventListener("click",function (e){search();},false);


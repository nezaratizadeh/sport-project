//written by Leila
window.onload=init;
function init(){
// alert("First loaded method!!");
}

function checkForBestSport() {
    let age = document.getElementById('ageId').value;
    let height = document.getElementById('heightId').value;
    let weight = document.getElementById('weightId').value;
    let check = true;

    if (age == "selectAge") {
        var ageError = document.getElementById("ageError");
        ageError.textContent = "Select Age";
        ageError.style.color = "red";
        document.getElementById('ageId').style.background = 'red';
        check = false;
    }
    if(weight<20 || weight>120){
        var weightError = document.getElementById("weightError");
        weightError.textContent = "Weight must be between 20 and 120";
        weightError.style.color = "red";
        document.getElementById('weightId').style.background = 'red';
        check = false;
    }
    if(height<100 || height>2000){
        var heightError = document.getElementById("heightError");
        heightError.textContent = "Height must be between 100 and 2000";
        heightError.style.color = "red";
        document.getElementById('heightId').style.background = 'red';
        check = false;
    }

    if(check) {
        if (age == "between6-14") {
        window.location = "https://en.wikipedia.org/wiki/Basketball";
        } else if (age == "between15-24") {
        window.location = "https://en.wikipedia.org/wiki/Tennis";
        } else if (age == "between25-40") {
        window.location = "https://en.wikipedia.org/wiki/Football";
        } else {
        window.location = "https://en.wikipedia.org/wiki/Volleyball";
        }
    }
}

function checkAgeValidation(){
    var age = document.getElementById('ageId').value;
    var ageError = document.getElementById("ageError");

    if(age == "selectAge") {
        ageError.textContent = "Select Age";
        ageError.style.color = "red";
        document.getElementById('ageId').style.background = 'red';

    }else{
        ageError.textContent = "";
        ageError.style.color = "white";
        document.getElementById('ageId').style.background = 'white';
    }

}

function checkWeightValidation() {
    var weight = document.getElementById('weightId').value;
    var weightError = document.getElementById("weightError");

    if(weight<20 || weight>120) {
        weightError.textContent = "Weight must be between 20 and 120";
        weightError.style.color = "red";
        document.getElementById('weightId').style.background = 'red';
    }else{
        weightError.textContent = "";
        weightError.style.color = "white";
        document.getElementById('weightId').style.background = 'white';
    }
}

function checkHeightValidation(){
    var height = document.getElementById('heightId').value;
    var heightError = document.getElementById("heightError");

    if(height<100 || height>2000) {
        heightError.textContent = "Height must be between 100 and 2000";
        heightError.style.color = "red";
        document.getElementById('heightId').style.background = 'red';
    }else{
        heightError.textContent = "";
        heightError.style.color = "white";
        document.getElementById('heightId').style.background = 'white';
    }
}

function  backToHomePage() {
    window.location = "index.html";

}
var greetMe = document.querySelector(".greetMeBtn");
var setName = document.querySelector(".nameSetBox");
var nameCounter = document.querySelector(".nameCounter");
var setReset = document.querySelector(".resetBtn")
var myLanguageRadios = document.querySelectorAll(".radios");


var storeNames = JSON.parse(localStorage.getItem('name')) || {}

var myGreetFactory = greetFactory(storeNames);

window.addEventListener('DOMContentLoaded', (event) => {
    nameCounter.innerHTML = myGreetFactory.counterValue();
});

function domGreetMe() {

    for (var i = 0; i < myLanguageRadios.length; i++) {
        if (myLanguageRadios[i].checked) {
            var theLanguageValue = myLanguageRadios[i].value
        }
    }

    var userInput = setName.value.replace(/[0-9]/g, '').replace(/[^\w\s]/gi, '');
    var result = myGreetFactory.greetUser(userInput, theLanguageValue);
    localStorage.setItem('name', JSON.stringify(myGreetFactory.updatePeopleObject()));
    document.querySelector('.greetingOutputField').classList.remove('danger');
    document.querySelector('.greetingOutputField').innerHTML = result;
    if (myGreetFactory.error()) {
        document.querySelector('.greetingOutputField').classList.add('danger');
        document.querySelector('.greetingOutputField').innerHTML = result;
    } else {
        document.querySelector('.greetingOutputField').classList.remove('danger');
        document.querySelector('.greetingOutputField').innerHTML = result;
    }
    nameCounter.innerHTML = myGreetFactory.counterValue();
    

}

function resetter() {
    localStorage.clear();
    nameCounter.innerHTML = myGreetFactory.counterValue();
    location.reload();
}
greetMe.addEventListener('click', domGreetMe)
setReset.addEventListener('click', resetter)
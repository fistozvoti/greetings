var greetMe = document.querySelector(".greetMeBtn");
var setName = document.querySelector(".nameSetBox");
var nameCounter = document.querySelector(".nameCounter");
var setReset = document.querySelector(".resetBtn")
var myLanguageRadios = document.querySelectorAll(".radios")

if(localStorage['name']) {
    var storeNames = JSON.parse(localStorage.getItem('name'));
    console.log(storeNames);
}
else{
    storeNames;
}

var myGreetFactory = greetFactory(storeNames);

window.onload = function (){
    nameCounter.innerHTML = myGreetFactory.counterValue();
};

function domGreetMe(){

    for (var i=0; i < myLanguageRadios.length; i++)  {
        if (myLanguageRadios[i].checked)  {
			var theLanguageValue = myLanguageRadios[i].value
        }
    } 
    var userInput = setName.value; 
    var result = myGreetFactory.setTheNames(userInput, theLanguageValue);   
    myGreetFactory.whosGreeted(userInput); 
    localStorage.setItem('name', JSON.stringify(myGreetFactory.whosInThePeopleObject()));
    nameCounter.innerHTML = myGreetFactory.counterValue();
    document.getElementById("greetingOutputField").innerHTML = result;   
}
function resetter(){
    localStorage.clear();
    nameCounter.innerHTML = myGreetFactory.counterValue();
    location.reload();
}
greetMe.addEventListener('click', domGreetMe)
setReset.addEventListener('click', resetter)
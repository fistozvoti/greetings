var greetMe = document.querySelector(".greetMeBtn");
var setName = document.querySelector(".nameSetBox");
var nameCounter = document.querySelector(".nameCounter");
var setReset = document.querySelector(".resetBtn")
var myLanguageRadios = document.querySelectorAll(".radios")

var myGreetFactory = greetFactory();

function domGreetMe(){
    for (var i=0; i < myLanguageRadios.length; i++)  {
        if (myLanguageRadios[i].checked)  {
			var theLanguageValue = myLanguageRadios[i].value
        }
    }  
    var userInput = setName.value 
    var result = myGreetFactory.setTheNames(userInput, theLanguageValue)
    nameCounter.innerHTML = myGreetFactory.getCounter();
    document.getElementById("greetingOutputField").innerHTML = result;   
}
function resetter(){
    location.reload();
}
greetMe.addEventListener('click', domGreetMe)
setReset.addEventListener('click', resetter)
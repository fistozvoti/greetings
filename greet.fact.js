function greetFactory(storeNames) {
    var theNames = {};
    var result;
    var counter = 0;
    var peopleObject = storeNames || {};

    function updatePeopleObject(storeNames) {
        peopleObject = storeNames || {}
        return peopleObject
    }

    function counterValue() {
        var howMany = Object.keys(peopleObject);
        counter = howMany.length;

        return counter;
    }

    function whosGreeted(name) {
        if (peopleObject[name] === undefined) {
            peopleObject[name] = 0;
        }
        console.log(peopleObject);
        return peopleObject;
    }

    function whosInThePeopleObject() {
        return peopleObject
    }

    function setTheNames(name, lang) {
        theNames = name;

        if (name === "" && lang === undefined) {
            return "Please select language and insert your name!";
        }
        if (lang === undefined) {
            return "Please select language!";
        }
        if (name === "") {
            return "Please enter name!";
        }

        if (name) {
            counter++;

            if (lang === "English") {
                result = "Hello, " + name;
            }
            else if (lang === "IsiXhosa") {
                result = "Molo, " + name;
            }
            else if (lang === "Afrikaans") {
                result = "Hallo, " + name;
            }
            return result
        }
    }


    function greetName() {
        return result;
    }
    function getName() {
        return theNames;
    }
    function getCounter() {
        return counter;
    }

    return {
        setTheNames,
        greetName,
        getName,
        getCounter,
        whosGreeted,
        counterValue,
        whosInThePeopleObject,
        updatePeopleObject
    }
}
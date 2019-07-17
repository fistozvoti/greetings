function greetFactory() {
    var theNames = {};
    var result;
    var counter = 0;


    function setTheNames(name, lang) {

        // name = name.toUpperCase();

        // if(!theNames.has(name)) {
        //     counter++; 
        // }
        
        
        theNames = name;
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
        else{
            result = "Please insert your name and select language!"
        }

        return result
    }


    function greetName() {
        return result;
    }
    function getName() {
        return theNames
    }
    function getCounter() {
        return counter;
    }
    
    return {
        setTheNames,
        greetName,
        getName,
        getCounter
    }
}
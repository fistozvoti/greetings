function greetFactory(storeNames) {

    var theNames = storeNames || {};
    let isError = false;
    counterValue = () => Object.keys(theNames).length;

    greetUser = (name, lang) => {
        isError = false;
        let upperCaseName = name.toUpperCase().charAt(0) + name.slice(1).toLowerCase();

        if (name != '' && lang != undefined) {


            if (theNames[upperCaseName] === undefined) {
                theNames[upperCaseName] = 0;
            }
            else {
                theNames[upperCaseName]++;
            }
            if (lang === "English") {
                return "Hello, " + upperCaseName;
            }
            else if (lang === "IsiXhosa") {
                return "Molo, " + upperCaseName;
            }
            else if (lang === "Afrikaans") {
                return "Hallo, " + upperCaseName;
            }

        }

        if (name === '' && lang != undefined) {
            isError = true;
            return 'Please enter name!';
        }
        if (lang === undefined && name != '') {
            isError = true;
            return 'Please select language!'
        }
        isError = true;
        return 'Please enter name or select language!';
    }

    updatePeopleObject = () => theNames;

    error = () => isError;

    return {
        greetUser,
        counterValue,
        error,
        updatePeopleObject
    }
}
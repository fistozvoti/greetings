describe('greet function', function () {
    let greetFirst = greetFactory();
    it('should be able to greet the inserted name with the selected language', function () {
        var result = greetFirst.greetUser("Iviwe", "IsiXhosa");
        assert.equal("Molo, Iviwe", result);
    });
    it('should be able to give a message if there is no language selected' , function(){
        let selectLanguage = greetFactory();

       var result = selectLanguage.greetUser("Iviwe", )
       
        assert.equal('Please select language!', result);
    });

    it('should be able to give a message if ther is no name entered and no language selected' , function(){
        let chooseNameOrLang = greetFactory();

       var result = chooseNameOrLang.greetUser("",)
       
        assert.equal('Please enter name or select language!', result);
    });
    it('should be able to give a message if there is no name entered' , function(){
        let enterName = greetFactory();

       var result = enterName.greetUser("", "English")
       
        assert.equal('Please enter name!', result);
    });

    it('should be able to keep track of how many names that have been greeted' , function(){
        let howManyNames = greetFactory();
         howManyNames.greetUser("Iviwe", "IsiXhosa");
         howManyNames.greetUser("Iviwe", "IsiXhosa");
         howManyNames.greetUser("Xola", "IsiXhosa");
        

        assert.equal(2, howManyNames.counterValue());
    });
    it('counter should not count for the same name twice' , function(){
        let countName = greetFactory();

        countName.greetUser("Iviwe", "IsiXhosa");
        countName.greetUser("Iviwe", "IsiXhosa");
        

        assert.equal(1, countName.counterValue());
    });

});
describe('greet function' , function(){
    it('should be able to greet the inserted name with the selected language' , function(){
        let greetFirst = greetFactory();

        greetFirst.setTheNames("Iviwe", "IsiXhosa");
        assert.equal("Molo, Iviwe", greetFirst.greetName());
    });
    it('should be able to return a message when there is no name inserted and no selected language' , function(){
        let greetLanguage = greetFactory();

        greetLanguage.setTheNames("")
        assert.equal("Please insert your name and select language!",greetLanguage.greetName());
    });
    it('should be able to take in any name' , function(){
        let getByName = greetFactory();
        
        getByName.setTheNames("Iviwe");
        console.log(getByName.getName());
        assert.equal("Iviwe", getByName.getName());
    });
    it('should be able to keep track of how many names that have been greeted' , function(){
        let counter = greetFactory();

        counter.setTheNames("Iviwe");
        counter.setTheNames("Liso");
        counter.setTheNames("Siya");
        assert.equal(3, counter.getCounter());
    });
    
});
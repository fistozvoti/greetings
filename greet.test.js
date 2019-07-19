describe('greet function' , function(){
    it('should be able to greet the inserted name with the selected language' , function(){
        let greetFirst = greetFactory();

        greetFirst.setTheNames("Iviwe", "IsiXhosa");
        assert.equal("Molo, Iviwe", greetFirst.greetName());
    });
    it('should be able to return a message when there is no name inserted and no selected language' , function(){
        let greetLanguage = greetFactory();

        greetLanguage.setTheNames("")
        assert.equal(undefined, greetLanguage.greetName("Please select language!"));
    });
    it('should be able to take in any name' , function(){
        let getByName = greetFactory();
        
        getByName.setTheNames("Iviwe");
        assert.equal("Iviwe", getByName.getName());
    });
    it('should be able to keep track of how many names that have been greeted' , function(){
        let counter = greetFactory();

        counter.getName("Iviwe");
        counter.getName("Liso");
        counter.getName("Siya");
        assert.equal(3, counter.getCounter());
    });
    
});
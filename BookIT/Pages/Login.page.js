require('../Utilities/CustomLocators.js'); 

var LoginPage = function (){

    this.email = $(by.name('email')); 
    this.password = $(by.name('password')); 
    this.submit = $(by.xpath("//button[@type = 'submit']")); 
    this.signInHeader = $(by.xpath("//div[@class='container']/h1")); 



};

module.exports = new LoginPage; 
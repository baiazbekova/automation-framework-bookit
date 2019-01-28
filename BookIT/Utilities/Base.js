var Base = function(){
    
    this.homeUrl= 'https://cybertek-reservation-qa.herokuapp.com/sign-in';
    
    this.navigateToHome = function(){
        browser.get(this.homeUrl);
    };



}
module.exports=new Base();
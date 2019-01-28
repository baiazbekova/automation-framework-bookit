var LoginPage = require ('../Pages/Login.page.js'); 
var Base = require('../Utilities/Base.js'); 

describe ('Login', ()=>{

    beforeEach(function (){
        Base.navigateToHome(); 
    });

    it('should  display sign in header', ()=>{
        expect(LoginPage.signInHeader.isDisplayed()).toBe(true); 
    }); 
    it('should display email textbox', ()=>{
        expect(LoginPage.email.isDisplayed()).toBe(true); 
    });
    it('should display password textbox', ()=>{
        expect(LoginPage.password.isDisplayed()).toBe(true); 
    }); 
    it('should login as teacher', ()=> {
        LoginPage.email.sendKeys('kliversageu@cbslocal.com');
        LoginPage.password.sendKeys('kerrieliversage'); 
        LoginPage.submit.click(); 
    });

    xit('should login as a team lead', ()=>{
        LoginPage.email.sendKeys('rbarstowk@cyberchimps.com');
        LoginPage.password.sendKeys('reneebarstow'); 
        LoginPage.submit.click(); 
    })
})
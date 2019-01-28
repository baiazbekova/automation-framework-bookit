
var HomePage = require ('../Pages/Home.page.js');

describe ('Home', ()=> {

    beforeEach(function (){
        browser.get('https://cybertek-reservation-qa.herokuapp.com/map');
    });

    it('should have correct page title', ()=> {
        expect(browser.getTitle()).toEqual("bookit"); 
    });

    it('should display homepage header', ()=> {
        expect(HomePage.homeButton.isDisplayed()).toBe(true); 
    })
    it('should display map header', ()=> {
        expect(HomePage.mapHeader.isDisplayed()).toBe(true); 
    }); 
    it('should display navigation bar', ()=> {
        expect(HomePage.navBar.isDisplayed()).toBe(true); 
    }); 
    it('should display schedule menu', ()=> {
        expect(HomePage.scheduleMenu.isDisplayed()).toBe(true);
    }); 
    it('should display hunt menu', ()=> {
        expect(HomePage.huntMenu.isDisplayed()).toBe(true); 
    });
    it('should display my menu', ()=> {
        expect(HomePage.myMenu.isDisplayed()).toBe(true); 
    });
    it('should display map of the rooms', ()=> {
        expect(HomePage.map.isDisplayed()).toBe(true); 
    });


})
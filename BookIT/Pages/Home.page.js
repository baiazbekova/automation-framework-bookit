require('../Utilities/CustomLocators.js'); 

var HomePage = function (){

    this.homeButton = $(by.xpath('//img[@class = "intro-img"]')); 
    this.mapHeader = $(by.css('.container h1'));
    this.navBar = $(by.css('.navbar-menu.is-transparent')); 
    this.scheduleMenu = $(by.linkText('schedule')); 
    this.huntMenu = $(by.linkText('hunt')); 
    this.myMenu = $(by.linkText('my')); 
    this.map = $(by.css('.main-wrap.center-vertically.container')); 
}
module.exports = new HomePage; 
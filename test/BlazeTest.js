const blazePage = require("../pages/BlazePage")

describe("blaze page elements handle on the page", function(){

    it("get texts of all main links", function(){
        browser.url('https://www.blazemeter.com/');
        browser.maximizeWindow();
        // blazePage.getTextForLi;
        // blazePage.useCasesElementsText;

        browser.pause(5000);

        console.log('third link is : ',
                          blazePage.specifChildElement(3).getText());

        blazePage.getSpecificChildElementText(2); 
        
    })
    
    it("main heading displayed? ", function(){
       console.log( "==============================",blazePage.mainHeader.isDisplayed());
       console.log("*****************************",blazePage.mainHeader.getText());
    })

    it("main heading enabled? ", function(){
        console.log( blazePage.mainHeader.isEnabled());
     })

     it("main heading exists? ", function(){
        console.log( blazePage.mainHeader.isExisting());
     })

     it("main heading displyed in view port? ", function(){
        console.log( blazePage.mainHeader.isDisplayedInViewport());
     })

     it("jmeter is displeyd in view port ", function(){
        console.log( blazePage.jmeterLink.isDisplayedInViewport());
     })

   //   it("click on product link if displayed ", function(){
   //      blazePage.clickOnProductLink();
   //      browser.pause(5000);
   //  })
});
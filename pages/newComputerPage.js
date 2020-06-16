let newComputerPage = function ()
{
    // Locate Comouter Name Field
    let computerName_txtField = element(by.id('name'));

    // Locate Introduced Date  Field
    let introducedDate_txtField= element(by.id('introduced'));

    // Locate Discontinued Date Field
    let discountinuedDate_txtField = element(by.id('discontinued'));

    // Locate Create New computer Button
    let createNewComputer_Btn = element(by.css('.primary'));

    // Define a funct
    this.getPage = function(url)
    {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    };

    this.enterComputerName = function(computerName_value)
    {

        computerName_txtField.sendKeys(computerName_value);
    };


    this.enterIntroducedDate = function(introducedDate_value)
    {

        introducedDate_txtField.sendKeys(introducedDate_value);
    };

    this.enterDiscountinuedDate = function(discountinuedDate_value)
    {

        discountinuedDate_txtField.sendKeys(discountinuedDate_value)
    };

    this.selectCompanyOption = function (companyName_value)
    {
        element(by.cssContainingText('option', companyName_value)).click();

    };

    this.clickonCreateNewComouterBtn = function ()
    {
        createNewComputer_Btn.click();

    };

    this.verifyingMessage=function(message)
    {
        let result = element(by.css('.alert-message')).getText();

        expect (result).toContain(message);

        browser.sleep (10000);
    }
};


module.exports= new newComputerPage;
let newComputerPage = require('../pages/newComputerPage')


describe ('New Computer Scenarios' , function ()
{

    it ('Add new computer successfully' , function ()
    {

        newComputerPage.getPage('http://computer-database.herokuapp.com/computers/new');

        newComputerPage.enterComputerName('HP');

        newComputerPage.enterIntroducedDate('2020-12-20');


        newComputerPage.enterDiscountinuedDate('2020-12-25');

        newComputerPage.selectCompanyOption('Nokia');

        newComputerPage.clickonCreateNewComouterBtn();

        newComputerPage.verifyingMessage('has been created')
    });

    it ('Computer Name is required' , function ()
    {
        newComputerPage.getPage('http://computer-database.herokuapp.com/computers/new');

        newComputerPage.enterIntroducedDate('2020-12-20');

        newComputerPage.enterDiscountinuedDate('2020-12-25');

        newComputerPage.selectCompanyOption('Nokia');

        newComputerPage.clickonCreateNewComouterBtn();

        
    });
});
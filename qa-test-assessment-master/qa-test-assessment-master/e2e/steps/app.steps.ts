const { Given, When, Then } = require('cucumber');
const { browser, protractor } = require('protractor');
const chai = require('chai').use(require('chai-as-promised'));

const EC = protractor.ExpectedConditions;
const searchFormPO = require('../page-objects/search-form.po');

Given('I want to search planet', async () => {
    await browser.wait(EC.visibilityOf(searchFormPO.planetRadioButton), 2000);
    await searchFormPO.planetRadioButton.click();
});

Given('I want to search character', async () => {
    await searchFormPO.peopleRadioButton.click();
});

When('I search for {string}', async (name) => {
    await searchFormPO.input.sendKeys(name);
    await searchFormPO.searchBtn.click();
    await browser.wait(EC.visibilityOf(searchFormPO.resultForm), 5000);
});

When('I clear the search form', async () => {
    await searchFormPO.input.clear();
});

When('I press enter key', async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await browser.wait(EC.visibilityOf(searchFormPO.resultForm), 5000);
});

Then('I see character name as {string}', async (name) => {
    await chai.expect(searchFormPO.characterName.getAttribute('innerText'))
        .to.eventually.contain(name);
});

Then('I see planet name as {string}', async (name) => {
    await chai.expect(searchFormPO.planetName.getAttribute('innerText'))
        .to.eventually.contain(name);
});

Then('I see gender as {string}', async (gender) => {
    await chai.expect(searchFormPO.gender.getAttribute('innerText'))
        .to.eventually.equal(gender);
});

Then('I see birth year as {string}', async (year) => {
    await chai.expect(searchFormPO.birthYear.getAttribute('innerText'))
        .to.eventually.equal(year);
});

Then('I see eye color as {string}', async (color) => {
    await chai.expect(searchFormPO.eyeColor.getAttribute('innerText'))
        .to.eventually.equal(color);
});

Then('I see skin color as {string}', async (color) => {
    await chai.expect(searchFormPO.skinColor.getAttribute('innerText'))
        .to.eventually.equal(color);
});

Then('I see population as {string}', async (population) => {
    await chai.expect(searchFormPO.population.getAttribute('innerText'))
        .to.eventually.equal(population);
});

Then('I see climate as {string}', async (climate) => {
    await chai.expect(searchFormPO.climate.getAttribute('innerText'))
        .to.eventually.equal(climate);
});

Then('I see gravity as {string}', async (gravity) => {
    await chai.expect(searchFormPO.gravity.getAttribute('innerText'))
        .to.eventually.equal(gravity);
});

Then('I see result as not found', async () => {
    await chai.expect(searchFormPO.resultForm.getAttribute('innerText'))
        .to.eventually.equal('Not found.');
});

Then('I see empty result list', async () => {
    await chai.expect(searchFormPO.resultForm.getAttribute('innerText'))
        .to.eventually.equal('');
});

Then('I see all names contain {string}', async (string) => {
    var planets = searchFormPO.multipleResults.map(function(items){
        return items.getText();
    });
    await planets.then(function (names){
        for (var i=0; i<names.length; ++i){
        chai.expect(names[i].toLowerCase()).to.include(string);
        }
    });
});

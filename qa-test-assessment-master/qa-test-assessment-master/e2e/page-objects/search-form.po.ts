import { element, by } from 'protractor';

module.exports = {
    get planetRadioButton() {
        return element(by.css('#planets'))
    },
    get peopleRadioButton() {
        return element(by.css('#people'))
    },
    get input() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get characterName() {
        return element(by.css('app-character h6'));
    },
    get planetName() {
        return element(by.css('app-planet h6'));
    },
    get gender() {
        return element(by.xpath('//div[contains(text(), "Gender:")]/following-sibling::div'));
    },
    get birthYear() {
        return element(by.xpath('//div[contains(text(), "Birth year:")]/following-sibling::div'));
    },
    get eyeColor() {
        return element(by.xpath('//div[contains(text(), "Eye color:")]/following-sibling::div'));
    },
    get skinColor() {
        return element(by.xpath('//div[contains(text(), "Skin color:")]/following-sibling::div'));
    },
    get population() {
        return element(by.xpath('//div[contains(text(), "Population:")]/following-sibling::div'));
    },
    get climate() {
        return element(by.xpath('//div[contains(text(), "Climate:")]/following-sibling::div'));
    },
    get gravity() {
        return element(by.xpath('//div[contains(text(), "Gravity:")]/following-sibling::div'));
    },
    get resultForm() {
        return element(by.css('app-search-form ~ div:first-of-type'));
    },
    get multipleResults() {
        return element.all(by.css('.card-subtitle'))
    }
};
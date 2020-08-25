# QA Engineer Assessment Solution

## Introduction
This project demonstrates the Protractor-Cucumber-TypeScript automation framework for UI Workflow tests of the Star Wars Search web application.
It comprises of 2 Feature file that covers various scenarios:
* Search for a Star Wars planet
* Search for a Star Wars character

Please follow README file for setup and execution. After execution you can find report under 'test-reports' folder.

### Framework features
* Used Protractor, Cucumber and TypeScript
* Page Object design pattern implementation.
* Cucumber html reports. Screenshots on failure feature scenarios.

## Remarks 
```
Currently, following two tests are failing due to a bug(reported below).
* Feature: Search for a Star Wars planet
    Scenario: Clear search form to remove previous search results

* Feature: Search for a Star Wars character
    Scenario: Clear search form to remove previous search results

Bug: Previous search results are not removed
Steps to reproduce:
    - search for either a character or a planet
    - clear the “Search form” and hit the Search button again

Expected result: You should then get an empty result list (previous search results are removed).

Actual result : Previous search results are not removed
```
###Submitted by
```
Name: Annu Goyal
```
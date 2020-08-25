# QA Engineer Assessment Solution

## Introduction
This project demonstrates the test automation framework for Star Wars Search web application. It comprises of 2 Feature files that covers various UI Workflow test scenarios.

* Feature1: Search for a Star Wars planet
    - Scenario1: Search planet name
    - Scenario2: Search similar planet names
    - Scenario3: Search invalid planet name
    - Scenario4: Clear search form to remove previous search results
    - Scenario5: Switch from planet search to character search
* Feature2: Search for a Star Wars character
    - Scenario1: Search character name
    - Scenario2: Search similar character names
    - Scenario3: Search invalid character name
    - Scenario4: Clear search form to remove previous search results
    - Scenario5: Switch from character search to planet search

Please follow README file for setup and execution. After execution you can find execution report under 'test-reports' folder.

### Framework features
* Used Protractor, Cucumber and TypeScript
* Page Object design pattern implementation.
* Cucumber html reports. Screenshots on failure feature scenarios.

## Remarks 
```
Currently, 2 tests are failing due to a bug reported below. For more details refer to the test report(generated after test execution)

Bug: Previous search results are not removed
Steps to reproduce:
    - search for either a character or a planet
    - clear the “Search form” and hit the Search button again

Expected result: You should then get an empty result list (previous search results are removed).

Actual result : Previous search results are not removed
```

##Submitted by
```
Name: Annu Goyal
```
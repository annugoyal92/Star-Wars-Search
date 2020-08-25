Feature: Search for a Star Wars character
    
    Scenario Outline: Search character name
        Given I want to search character
        When I search for "<Name>"
        Then I see character name as "<Character>"
        And I see gender as "<Gender>"
        And I see birth year as "<Birth year>"
        And I see eye color as "<Eye color>"
        And I see skin color as "<Skin color>"
        
    Examples: 
        | Name        | Character     | Gender| Birth year | Eye color | Skin color |
        | Luke        | Luke Skywalker| male  | 19BBY      | blue      | fair       |
        | Leia Organa | Leia Organa   | female| 19BBY      | brown     | light      |
        | r2          | D2            | n/a   | 33BBY      | red       | white, blue|

    Scenario: Search similar character names
        Given I want to search character
        When I search for "Ta"
        Then I see all names contain "ta"
        
    Scenario: Search invalid character name
        Given I want to search character
        When I search for "Harry Potter"
        Then I see result as not found

    Scenario: Clear seacrh form to remove previous search results
        Given I want to search character
        When I search for "Yoda"
        And I clear the search form
        And I press enter key
        Then I see empty result list

    Scenario: Switch from character search to planet search
        Given I want to search character
        When I search for "Darth Vader"
        And I want to search planet
        And I press enter key
        Then I see result as not found

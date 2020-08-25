Feature: Search for a Star Wars planet
    
    Scenario Outline: Search planet name
        Given I want to search planet
        When I search for "<Name>"
        Then I see planet name as "<Planet>"
        And I see population as "<Population>"
        And I see climate as "<Climate>"
        And I see gravity as "<Gravity>"
        
    Examples: 
        | Name     | Planet     | Population | Climate   | Gravity     | 
        | Alderaan | Alderaan   | 2000000000 | temperate | 1 standard  | 
        | Hoth     | Hoth       | unknown    | frozen    | 1.1 standard| 
        | Tatooine | Tatooine   | 200000     | arid      | 1 standard  |
        | Polis    | Polis Massa| 1000000    | artificial temperate | 0.56 standard|

    Scenario: Search similar planet names
        Given I want to search planet
        When I search for "ta"
        Then I see all names contain "ta"

    Scenario: Search invalid planet name
        Given I want to search planet
        When I search for "Mars"
        Then I see result as not found

   Scenario: Clear search form to remove previous search results
        Given I want to search planet
        When I search for "Kamino"
        And I clear the search form
        And I press enter key
        Then I see empty result list

    Scenario: Switch from planet search to character search
        Given I want to search planet
        When I search for "Kamino"
        And I want to search character
        And I press enter key
        Then I see result as not found

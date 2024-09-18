Feature: Event Creation
@createEvent
  Scenario: Successfully create an event
    Then I create an event with the following details:
      | Environment | Title            | Description        | Agenda |
      | Dev         | Event Title Here | Description Here   | Yes    |
    Then I delete the created event and associated entities

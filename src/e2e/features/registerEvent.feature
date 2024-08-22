Feature: Register for an Event

  @id-registration
  Scenario: User registers for an event with minimum required fields

    Given I am on the events hub page
    #And I am able to see the events listed there
    #And I choose the event named "Tech Conference"  # This can be parameterized if needed
    #When I click the "View Event" button for the selected event
    #Then I should be taken to the event details page
    Then I should see the event details on the page
    Then I should see the Agenda on the event details page
    And I should see the Venue on the event details page
    Then I click the RSVP Button
    Then I sign in AdobeID
    Then I again click the RSVP Button
    #Then I see the RSVP Form
    #Then I see user information pre filled
    #When I check the Terms and Conditions
    #Then I click the Submit button
    #Then I see the registration confirmation
    #Then I close the confirmation

         
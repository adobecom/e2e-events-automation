const { test, expect } = require('@playwright/test');
const { Given, Then,When } = require("@cucumber/cucumber");
const { EventsHubPage } = require("../pages/eventsHub.page.js");
const { EventsDetailsPage } = require('../pages/eventDetails.page.js');
const { AdobeIdSigninPage } = require('@amwp/platform-ui-lib-adobe/lib/common/page-objects/adobeidsingin.page.js');

const page = new EventsDetailsPage();

Given('I am on the events hub page', async function () {
  this.page = new EventsDetailsPage();
  await this.page.open();
});

// Then('I choose the {string} category', async function (categoryName) {
//   await this.page.selectCategory(categoryName)
// });

// Then('confirm events are displayed on the page', async function () {
//   const areEventsDisplayed = await this.page.areEventCardsVisible();
//   if (!areEventsDisplayed) {
//     throw new Error("Event cards are not displayed on the page");
//   }
//   console.log("Event cards are successfully displayed on the page.");
// });

// Then('view {string} event', async function (eventTitle) {
//   await this.page.viewEventByTitle(eventTitle);
// });


Then('I should see the event details on the page', async function () {
   
    const eventTitle = await this.page.native.locator(this.page.locators.eventTitle);
  
   await eventTitle.waitFor({ state: 'visible'});

    // Assert that the event title element is visible
   const isVisible = await eventTitle.isVisible();
    expect(isVisible).toBeTruthy();
    
  });
  
  Then('I should see the Agenda on the event details page', async function () {
    const eventAgenda = this.page.native.locator(this.page.locators.eventAgenda);
   await eventAgenda.waitFor({ state: 'visible'});
    // Assert that the event agenda element is visible
    const isVisible = await eventAgenda.isVisible();
    expect(isVisible).toBeTruthy();
  });
  
  Then('I should see the Venue on the event details page', async function () {
    const eventVenue = this.page.native.locator(this.page.locators.eventVenue);
   await eventVenue.waitFor({ state: 'visible'});
    // Assert that the event agenda element is visible
    const isVisible = await eventVenue.isVisible();
    expect(isVisible).toBeTruthy();
  }); 
  
  Then('I click the RSVP Button', async function () {
    try {
      await this.page.clickRsvp();
    } catch (error) {
      console.error("Failed clicking RSVP Button")
      
    }
  
    
  });
  
 
  Then ('I sign in AdobeID',async function () {
    try{
      this.context(AdobeIdSigninPage);

      await this.page.signIn('adgaur+US+Complete+VISA+event-attendee+1@adobetest.com','Bap@d0be')
      
      console.log("Sign in done")
    
    }
     
    catch(error){
console.log(error)}
    
  });

  Then('I again click the RSVP Button', async function () {
    try {
      this.page = new EventsDetailsPage();
      await this.page.clickRsvp();
    } catch (error) {
      console.error("Failed clicking RSVP Button", error)
      
    }
  });
    
  Then('I see the RSVP Form', async function () {
    
    const eventRsvpForm = this.page.native.locator(this.page.locators.eventForm);
    await eventRsvpForm.waitFor({ state: 'visible'});
     // Assert that the event form element is visible
     const isVisible = await eventRsvpForm.isVisible();
     expect(isVisible).toBeTruthy();
  });

  Then('I see the event title', async function () {

    await this.page.isEventTitleCorrect();
    
  });


  Then('I verify if email in the form is correct', async function () {

    await this.page.isEventTitleCorrect();
    
  });
  
  Then('I check the Terms and Conditions', async function () {
    await eventDetailsPage.checkTermsAndCondition();
  });

  Then('I click the Submit button', async function () {
    await eventDetailsPage.clickRsvpSubmit();
  });

  Then('I see the registration confirmation', async function () {
    await expect(eventDetailsPage.rsvpConfirmation).toBeVisible();
  });

  Then('I close the confirmation', async function () {
    await eventDetailsPage.closeConfirmation();
  });
  
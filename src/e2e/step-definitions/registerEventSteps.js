
const { Given, When, Then , And} = require('@cucumber/cucumber');
const { chromium,expect } = require('@playwright/test');
const EventDetails = require ('../pages/eventDetails');

let eventDetailsPage =new EventDetails(page);



const browser = await chromium.launch({ headless: false });

const context = await browser.newContext();

this.page = await context.newPage();



Then('I should see the event details on the page', async function () {
    await expect(eventDetailsPage.isEventDetailsVisible() ).resolves.toBe(true);
    
  });
  
  Then('I should see the Agenda on the event details page', async function () {
    await expect(eventDetailsPage.isAgendaVisible()).resolves.toBe(true);
  });
  
  Then('I should see the Venue on the event details page', async function () {
    await expect(eventDetailsPage.isVenueVisible()).resolves.toBe(true);
  });
  
  Then('I should see an RSVP button on the event details page', async function () {
    await expect(eventDetailsPage.isRSVPButtonVisible()).resolves.toBe(true);
  });
  
  Then('the RSVP button should be clickable', async function () {
    await expect(eventDetailsPage.isRSVPButtonClickable()).resolves.toBe(true);
  });
  
  When('I click the RSVP button', async function () {
    await eventDetailsPage.clickRSVPButton();
  });
  
  if (eventDetailsPage.isSignInPage())  {
  Then('I Sign In', async function () {


    await eventDetailsPage.signIn('testuser', 'password'); // Replace with actual credentials if necessary
    Then('I click the RSVP button', async function () {
        await eventDetailsPage.clickRSVPButton();
      });

  }); }
  
  Then('I see the RSVP Form', async function () {
    
    await expect(eventDetailsPage.rsvpForm).toBeVisible();
  });

  Then('I see user information pre filled', async function () {
    
    await expect(eventDetailsPage.verifyEmail).toBeVisible();
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
  
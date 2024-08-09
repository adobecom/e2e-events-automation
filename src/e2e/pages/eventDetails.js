class EventDetails{


constructor(page){
this.page=page;
}

//Selectors
  get eventName() { return this.page.locator('.event-name'); } // Adjust selector
  get eventTime() { return this.page.locator('.event-time'); } 
  get agenda() { return this.page.locator('.agenda'); } // Adjust selector
  get venue() { return this.page.locator('.venue'); } // Adjust selector
  get rsvpButton() { return this.page.locator('.rsvp-button'); } // Adjust selector
  get signInPage() { return this.page.locator('.sign-in-page'); } // Adjust selector
  get rsvpForm() { return this.page.locator('.rsvp-form'); } // Adjust selector



//Actions


  async clickRSVPButton() {
    await this.rsvpButton.click();
  }

  async signIn(username, password) {
    if (await this.signInPage.isVisible()) {
      await this.page.fill('#username', username); // Adjust selector
      await this.page.fill('#password', password); // Adjust selector
      await this.page.click('#sign-in-button'); // Adjust selector
    }
  }

  async checkTermsAndCondition() {
   
      try {
        await this.page.check('#name'); // Adjust selector
      } catch (error) {
        
      }
    
    
  }

  // Verifications
  async isEventDetailsVisible() {
    try {
        return (this.eventName.isVisible() && this.eventTime.isVisible);
    } catch (error) {
        
    }
  }

  async isAgendaVisible() {
    return this.agenda.isVisible();
  }

  async isVenueVisible() {
    return this.venue.isVisible();
  }

  async isRSVPButtonVisible() {
    return this.rsvpButton.isVisible();
  }

  async isRSVPButtonClickable() {
    return this.rsvpButton.isEnabled();
  }
}

module.exports = EventPage;


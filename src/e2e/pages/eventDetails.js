class EventDetails{


constructor(page){
this.page=page;
this.eventName=page.locator('.event-name');
this.eventTime=page.locator('.event-name');
this.agenda=page.locator('.event-name');
this.venue=page.locator('.event-name');
this.rsvpButton=page.locator('.event-name');
this.signInPage=page.locator('.event-name');
this.rsvpForm=page.locator('.event-name');
}



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
        return await (this.eventName.isVisible() && this.eventTime.isVisible);
    } catch (error) {
        
    }
  }


}

module.exports = EventPage;


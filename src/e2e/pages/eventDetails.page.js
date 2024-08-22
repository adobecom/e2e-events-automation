const { EventsBasePage } = require('./eventsBase.page.js');


class EventsDetailsPage extends EventsBasePage {
  constructor() {
    super('/events/creative-jam/adams-creative-jelly-jam/boston/ma/2024-08-30.html?debug=true');
    
    this.locators = {
     
      eventTitle : `#event-title`,
      eventDateTime : `.display-event-date-time.body-m`,
      eventVenue : '#venue',
      eventAgenda: `#agenda`,
      eventContainer:'.foreground.container',
      eventRsvp:`//a[text()='RSVP now' and @href='#rsvp-form-1']`
    };
  }


  async clickRsvp(){
    //check event container is visible
    await this.native.waitForSelector(this.locators.eventContainer);

    //check Rsvp present inside container
    await this.native.waitForSelector(this.locators.eventRsvp);
 
    //click the rsvp button

    await this.native.locator(this.locators.eventRsvp).click();
    this.native.locator(this.locators.eventRsvp).click();
   // await (this.locators.eventRsvp).click();

    
    


  }

  

 
}

module.exports = { EventsDetailsPage };

const puppeteer = require('puppeteer');
let fs = require('fs');

(async () => {
    // OPTION 1 - Launch new.
    /**const browser = await puppeteer.launch({
        headless: false // Puppeteer is 'headless' by default.
    });**/

    // OPTION 2 - Connect to existing.
    // MAC: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
    // PC: start chrome.exe –remote-debugging-port=9222
    // Note: this url changes each time the command is run.
     const wsChromeEndpointUrl = 'ws://127.0.0.1:9222/devtools/page/2EC769F4CFCE9810279B82D8A29DAD7A';
     const browser = await puppeteer.connect({
         browserWSEndpoint: wsChromeEndpointUrl
     });

    const page = await browser.newPage();
    await page.goto('https://outlook-sdf.office.com/calendar/view/agenda?gulp&culture=en')
  
    await page.waitForSelector('.agenda-item-wrapper > .CalendarSurfaceItem---itemCardWrapper---2NNHc:nth-child(2) > .content-76 > .CalendarInDaySurfaceItem---inDayContentWrapper---10N5m > .CalendarInDaySurfaceItem---itemContent---2K2XW')
  await page.click('.agenda-item-wrapper > .CalendarSurfaceItem---itemCardWrapper---2NNHc:nth-child(2) > .content-76 > .CalendarInDaySurfaceItem---inDayContentWrapper---10N5m > .CalendarInDaySurfaceItem---itemContent---2K2XW')
  
  await page.waitForSelector('.CalendarReadingPaneBody---readingPane---bqc7t > .HubSection---hubSection---kEGHc > .MeetingResponseInfo---itemContainer---1iyrL > .HubItem---additionalInfoContainer---2KUdw > .Button---button---3wSGW')
  await page.click('.CalendarReadingPaneBody---readingPane---bqc7t > .HubSection---hubSection---kEGHc > .MeetingResponseInfo---itemContainer---1iyrL > .HubItem---additionalInfoContainer---2KUdw > .Button---button---3wSGW')
  
  await page.waitForSelector('.BottomSheet---bottomSheetContainer---3L8X7 > .SelectableList---selectableList---bhnlH > .HubItem---hubItemContainer---1RaMQ:nth-child(1) > .HubItem---textContainer---2re5a > .SelectableList---title---1j7ad')
  await page.click('.BottomSheet---bottomSheetContainer---3L8X7 > .SelectableList---selectableList---bhnlH > .HubItem---hubItemContainer---1RaMQ:nth-child(1) > .HubItem---textContainer---2re5a > .SelectableList---title---1j7ad')
  
  await page.waitForSelector('.RsvpActions---rsvpActionsContainer---3cmet > .HubItem---hubItemContainer---1RaMQ > .HubItem---additionalInfoContainer---2KUdw > .Toggle---buttonContainer---3wTNW > .Toggle---checkedPill---2eKac')
  await page.click('.RsvpActions---rsvpActionsContainer---3cmet > .HubItem---hubItemContainer---1RaMQ > .HubItem---additionalInfoContainer---2KUdw > .Toggle---buttonContainer---3wTNW > .Toggle---checkedPill---2eKac')
  
          
})();
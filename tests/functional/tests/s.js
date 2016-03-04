module.exports = {
tags: ['login'],
"fill search form": function (client) {
 client
   .maximizeWindow()
   .useXpath()
   .url(client.globals.urls.aeroskyhome)
   //.pause(1000)
   .click("//a[text()='Hoteluri']")
   .pause(1000)
   .setValue("//input[@id='TextBoxLocalityFrom']",'Berlin,Germania(BER)')
   .pause(1000)
   .setValue("//input[@id='txtStartDate']",'15/03/2016')
   .pause(1000)
   .setValue("//input[@id='txtEndDate']",'26/03/2016')
   .pause(3000)
   .click("//input[@id='ButtonSearch']")
   .waitForElementVisible("//iframe[@id='iframeAmadeus']", 30000)
   .pause(5000)
       .frame(0)
               .assert.containsText("//div[@class='tdcell ResultHeaderLeft']", 'Rezultate hotel in Berlin, Germania')
               .pause(3000)
               .frame(null)
   .saveScreenshot('./aerosky/screenshots/screenanto.png')
   .end();

 }
 }

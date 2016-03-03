module.exports = {
tags: ['login'],
"fill search form": function (client) {
 client
   .maximizeWindow()
   .useXpath()
   .url(client.globals.urls.aeroskyhome)
   //.pause(1000)
   //.waitForElementPresent("//a[text()='Villa America']", 21000)
   .click("//a[text()='Hoteluri']")
   .pause(1000)
   .setValue("//input[@id='TextBoxLocalityFrom']",'Berlin,Germania(BER)')
   .pause(1000)
   .setValue("//input[@id='txtStartDate']",'15/03/2016')
   .pause(1000)
   .setValue("//input[@id='txtEndDate']",'26/03/2016')
   .pause(3000)
   //.waitForElementVisible('//body/descendant::a[@class="more-link"]', 2000)
   //.click("//a[text()='Workshop in Italy']")
   .click("//input[@id='ButtonSearch']")
   .waitForElementVisible("//iframe[@id='iframeAmadeus']", 30000)
   .pause(5000)
       .frame(0)
               //.waitForElementPresent("//img[contains(@class, 'wp-image')]", 30000)
               .assert.containsText("//div[@class='tdcell ResultHeaderLeft']", 'Rezultate hotel in Berlin, Germania')
               //.click("//div[@id='mceu_40']/descendant::i[1]")
               .pause(3000)
               //.click("//i[@class='mce-ico.mce-i-dashicon.dashicons-edit']")
               .frame(null)
   .saveScreenshot('./aerosky/screenshots/screenanto.png')
   .end();

 }
 }

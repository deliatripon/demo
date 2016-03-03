module.exports = {
tags: ['search'],
"fill search form": function (client) {
 client
   .maximizeWindow()
   .useXpath()
   .url(client.globals.urls.aeroskyhome)
   .waitForElementVisible("//input[@id='TextBoxLocalityFrom']", 3000)
   .setValue("//input[@id='TextBoxLocalityFrom']",'Cluj Napoca, Romania (CLJ) (Toate aeroporturile)')
   .waitForElementVisible("//input[@id='TextBoxLocalityTo']", 3000)
   .setValue("//input[@id='TextBoxLocalityTo']",'Berlin,  Germania (BER) (Toate aeroporturile)')
   .waitForElementVisible("//input[@id='txtStartDate']", 3000)
   .setValue("//input[@id='txtStartDate']",'15/03/2016')
   .waitForElementVisible("//input[@id='txtEndDate']", 3000)
   .setValue("//input[@id='txtEndDate']",'26/03/2016')
   .waitForElementVisible("//input[@id='ButtonSearch']", 3000)
   .click("//input[@id='ButtonSearch']")
   .waitForElementVisible("//iframe[@id='iframeAmadeus']", 30000)
   .pause(5000)
       .frame(0)
               //.waitForElementPresent("//img[contains(@class, 'wp-image')]", 30000)
               .waitForElementVisible("//div[@class='ResultHeaderLeft']", 50000)
               //.assert.containsText("//div[@class='ResultHeaderLeft']", client.globals.search_res_assert)
               .assert.containsText("//div[@class='tdcell ResultHeaderLeft']", 'Rezultate hotel in Berlin, Germania')
               //.click("//div[@id='mceu_40']/descendant::i[1]")
               .pause(3000)
               //.click("//i[@class='mce-ico.mce-i-dashicon.dashicons-edit']")
               .frame(null)
   .saveScreenshot('./aerosky/screenshots/screen4.png')
   .end();

 }
 };

module.exports = {
'fill search form': function (client) {
  var aero = client.pages.aero();
 //client
   //.maximizeWindow()
   //.useXpath()
   //.url(client.globals.urls.aeroskyhome)
 aero.navigate()
   //.waitForElementPresent("//a[text()='Villa America']", 21000)
   .assert.visible('@LocalityFromInput')
   .setValue('@LocalityFromInput','Cluj Napoca, Romania (CLJ) (Toate aeroporturile)')
   .pause(1000)
   .assert.visible('@LocalityToInput')
   .setValue('@LocalityToInput','Berlin,  Germania (BER) (Toate aeroporturile)')
   .pause(1000)
   .click('@submit');

client.end();

 }
 };

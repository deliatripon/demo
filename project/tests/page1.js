module.exports = {
'fill search form': function (client) {
 var aero = client.pagess.paero();
 //client
   //.maximizeWindow()
   //.useXpath()
   //.url(client.globals.urls.aeroskyhome)
   client.url(client.globals.urls.aeroskyhome)
   //.waitForElementPresent("//a[text()='Villa America']", 21000)
   //aero.assert.visible('@LocalityFromInput')
   aero.setValue('@LocalityFromInput','Cluj Napoca, Romania (CLJ) (Toate aeroporturile)')
   //.pause(1000)
   //aero.assert.visible('@LocalityToInput')
   aero.setValue('@LocalityToInput','Berlin,  Germania (BER) (Toate aeroporturile)')
   //.pause(1000)
   aero.click('@submit');

client.end();

 }
 };

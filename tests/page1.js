module.exports = {
'fill search form': function (client) {
 var aero = client.pagess.paero();
 //client
   //.maximizeWindow()
   //.useXpath()
   client.url(client.globals.urls.aeroskyhome)
   aero.assert.visible('@LocalityFromInput')
   aero.setValue('@LocalityFromInput','Cluj Napoca, Romania (CLJ) (Toate aeroporturile)')
   aero.assert.visible('@LocalityToInput')
   aero.setValue('@LocalityToInput','Berlin,  Germania (BER) (Toate aeroporturile)')
   //.pause(1000)
   aero.click('@submit');

client.end();

 }
 };

require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Poopy-di scoop Scoop-diddy-whoop Whoop-di-scoop-di-poop Poop-di-scoopty Scoopty-whoop Whoopity-scoop, whoop-poop Poop-diddy, whoop-scoop Poop, poop Scoop-diddy-whoop Whoop-diddy-scoop Whoop-diddy-scoop, poop',
     from: '+16075272269',
     to: '+13037189034'
   })
  .then(message => console.log(message.sid));
var express = require('express');
var router = express.Router();
const TelegramBot = require('node-telegram-bot-api');

let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
let HELLOWORLD_GROUP_CHATID = '-986776285';
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

function sendTelegramMessage({ roomId }) {
  console.log('sendTelegramMessage');
  console.log({ roomId });
  bot.sendMessage(HELLOWORLD_GROUP_CHATID, `//localhost:8080/${roomId}`);
}

// http://localhost:3000/meetingRequest/r/helloworld_room
// http://localhost:8080/meetingRequest/r/helloworld_room

/* GET users listing. */
router.get('/r/:roomId', function (req, res, next) {
  var { roomId } = req.params;

  sendTelegramMessage({ roomId });
  res.send(JSON.stringify({ hello: 'world' }));
});

module.exports = router;

var express = require('express');
var router = express.Router();
const TelegramBot = require('node-telegram-bot-api');

let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
let TELEGRAM_CHATID = process.env.TELEGRAM_CHATID;

let MEET_BASEURL = process.env.MEET_BASEURL;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

const MESSAGE_TEMPLATE=`
incoming meeting request !

__MEET_BASEURL__/__roomId__

__comments__

`.strip()

function sendTelegramMessage({ roomId, comments="" }) {
  try {
    console.log('sendTelegramMessage');
    console.log({
      TELEGRAM_BOT_TOKEN,
      TELEGRAM_CHATID,
      roomId });

    // bot.sendMessage(TELEGRAM_CHATID,
    //   `${MEET_BASEURL}/${roomId}`
    //   );
    bot.sendMessage(TELEGRAM_CHATID,
      MESSAGE_TEMPLATE
        .replace('__MEET_BASEURL__', MEET_BASEURL)
        .replace('__roomId__', roomId)
        .replace('__comments__', comments)
        .strip()
      );
  } catch (error) {
    console.log(error)
    throw error
  }
}

// http://localhost:3000/meetingRequest/r/helloworld_room
// http://meetapi.louislabs.com/meetingRequest/r/helloworld_room

/* GET users listing. */
router.get('/r/:roomId', function (req, res, next) {
  try {
    var { roomId } = req.params;

    sendTelegramMessage({ roomId });
    res.send(JSON.stringify({ result: 'done' }));

  } catch (error) {
    res.send(JSON.stringify({result:'error during send message'}))
  }
});

module.exports = router;

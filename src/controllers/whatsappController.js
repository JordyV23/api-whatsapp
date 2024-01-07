const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./log.txt",{ flags: 'a' }))

const verifyToken = (req, res) => {
  try {
    let accessToken = "jxe60pmHqdYmcClzX58wQji";
    let token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const receiveMessage = (req, res) => {
  try {

    var entry = (req.body['entry'])[0]
    var changes = (entry['changes'])[0]
    var value = changes["value"]
    var messageObject = value['messages']

    myConsole.log(messageObject)

    res.send("EVENT_RECEIVED");
  } catch (error) {
    myConsole.log(error)
    res.send("EVENT_RECEIVED");
  }
};

module.exports = {
  verifyToken,
  receiveMessage,
};

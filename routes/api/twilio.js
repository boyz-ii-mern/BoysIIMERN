const router = require("express").Router();
const models = require("../../models");
const { throwIfNull } = require("../../utils");
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_PW;
const client = require('twilio')(accountSid, authToken);

router.route("/")
    .post((req, res) => {
        console.log(req.body);
        let newPhoneNum = `+1${req.body.to}`;
        console.log("this is newPhoneNum", newPhoneNum);
        client.messages
            .create({
                body: 'https://boyz2mern.herokuapp.com/signup',
                from: '+18178359696',
                to: newPhoneNum
            })
            .then(message => console.log(message.sid));
            res.send("twilio message sent!");
    })

module.exports = router;
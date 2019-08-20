const router = require("express").Router();
const models = require("../../models");
const { throwIfNull } = require("../../utils");
const accountSid = 'AC57694dd1e70b59334ea16a35d0720d3c';
const authToken = '31c24a11801fbfb2da6760dbe131b89f';
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
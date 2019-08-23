# Likely

Likely is an app that gives small groups the opportunity to plan events, chat, post photos, and assign hilarious superlatives to one another on the go. It's all the best parts of Facebook with the added benefit of not having to actually be on Facebook! 

Join different groups, plan multiple events, and you'll be voted Most Likely to have a blast!

Check out our app! https://boyz2mern.herokuapp.com/



## Getting Set Up
1. Clone this repository on GitHub with link https://github.com/boyz-ii-mern/BoysIIMERN.git
2. To install the project, run in the root directory: ```npm install```
3. To start the project, run in the root directory: ```npm start``` 


## User Experience


## Deployment

Created with ReactJS and Deployed on Heroku.



## Built With

* [Twilio](https://www.twilio.com/)
* [Moment](https://momentjs.com/)
* [Passport](http://www.passportjs.org/)
* Node

## CSS
* [Materalize](https://materializecss.com/)

## Backend
* MySQL
* Express

### Photos
* [Filepond](https://pqina.nl/filepond/)
* [React Stack Grid](https://github.com/tsuyoshiwada/react-stack-grid)
* [React Image Lightbox](https://www.npmjs.com/package/react-image-lightbox)
* [Firebase Storage & Database](https://firebase.google.com/)

## Authors

* **Stephanie Sapp**
* **Daniel Wyatt**
* **Maggie Jo Saylor**
* **Leon Lin**
* **Patricia Dalinis**


## API Routes

### User
#### /api/user/
* GET - _doesn't do anything_
#### /api/user/all
* GET  - get all users
#### /api/user/login
* POST
#### /api/user/logout
* POST
#### /api/user/signup
* POST
#### /api/user/profile/:userId
* GET

### Groups
#### /api/groups/
* POST - create new group
    - *Request Body*
        - req.body.name (str)
        - req.body.bannerImage (str)
        - req.body.members (array of userIds)
    - *Returns*
        - new group
#### /api/groups/byUser/:userId
* GET - get all groups for a user
#### /api/groups/members/:groupId
* GET - get all members of a group
* POST - associate user with group (as member)
    - *Request Body*
        - req.body.newMember (userId)
    - *Returns*
        - all members (updated)
* DELETE - delete group member (only deletes membership, not the user itself)
    - *Request Body*
        - req.body.deleteMember (userId)
    - *Returns*
        - "ok" status
#### /api/groups/detail/:groupId
* GET - get group details of a group
* DELETE - delete group
    - *Returns*
        - "ok" status

### Events
#### /api/events/
* POST - create new event
    - *Request Body*
        - req.body.name (str)
        - req.body.location (str)
        - req.body.date (str)
        - req.body.groupId
        - req.body.userId
    - *Returns*
        - new event
#### /api/events/byUser/:userId
* GET - get all events for a user
#### /api/events/byGroup/:groupId
* GET - get all events for a group
#### /api/events/detail/:eventId
* GET - get events details of an event
* PUT - update an event
    - *Request Body* (\* optional)
        - \*req.body.name (str)
        - \*req.body.location (str)
        - \*req.body.date (str)
        - \*req.body.isActive (true|false)
    - *Returns*
        - updated event
* DELETE - delete event
    - *Returns*
        - "ok" status
#### /api/events/photos/:eventId
* GET - get all photos for event
* POST - add new photo to event
    - *Request Body*
        - req.body.url (str)
        - req.body.date (str)
    - *Returns*
        - all photos for event (updated)
* DELETE - delete photo
    - *Request Body*
        - req.body.eventPhotoId
    - *Returns*
        - "ok" status
#### /api/events/comments/:eventId
* GET - get all comments for event
* POST - add new comment to event
    - *Request Body*
        - req.body.body (str)
        - req.body.userId
    - *Returns*
        - all comments for event (updated)
* DELETE - delete comment
    - *Request Body*
        - req.body.commentId
    - *Returns*
        - "ok" status

### Superlatives

#### /api/superlatives/byEvent/:eventId
* GET - get all superlatives for event
* POST - add new superlative
    - *Request Body*
        - req.body.text (str)
        - req.body.userId
    - *Returns*
        - new superlative
#### /api/superlatives/byUser/:userId
* GET - get all superlatives for a user
#### /api/superlatives/detail/:superlativeId
* GET - get superlative details
* DELETE - delete superlative
    - *Request Body*
        - req.body.superlativeId
    - *Returns*
        - "ok" status


## License

*This project was created for Northwestern's Fullstack Coding Bootcamp*

## Acknowledgments

*Thank you to our instructors, our TAs, and our fellow classmates!*

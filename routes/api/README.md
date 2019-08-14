# API Routes

## User
### /api/user/
* GET - _doesn't do anything_
### /api/user/all
* GET - _doesn't do anything_
### /api/user/login
* POST
### /api/user/logout
* POST
### /api/user/signup
* POST
### /api/user/profile/:userId
* GET

## Groups
### /api/groups/
* POST - create new group
    - *Request Body*
        - req.body.name (str)
        - req.body.bannerImage (str)
        - req.body.members (array of userIds)
    - *Returns*
        - new group
### /api/groups/byUser/:userId
* GET - get all groups for a user
### /api/groups/members/:groupId
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
### /api/groups/detail/:groupId
* GET - get group details of a group
* DELETE - delete group
    - *Returns*
        - "ok" status

## Events
### /api/events/
* POST - create new event
    - *Request Body*
        - req.body.name (str)
        - req.body.location (str)
        - req.body.date (str)
        - req.body.groupId
        - req.body.userId
    - *Returns*
        - new event
### /api/events/byUser/:userId
* GET - get all events for a user
### /api/events/byGroup/:groupId
* GET - get all events for a group
### /api/events/detail/:eventId
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
### /api/events/photos/:eventId
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
### /api/events/comments/:eventId
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

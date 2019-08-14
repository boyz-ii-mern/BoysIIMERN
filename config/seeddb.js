const models = require("../models")

const {
    User, Group, Membership, Event, EventPhoto, Superlative, Comment, Image
} = models

async function seedDatabase() {

    const user1 = await User.create({
        email: 'my@email.com',
        password: 'password',
        firstName: 'Joe',
        lastName: 'Man',
        superlative: 'Most Likely to Be Cool',

    })
    const user2 = await User.create({
        email: 'who@example.com',
        password: 'password',
        firstName: 'Jane',
        lastName: 'Lady',
        superlative: 'Most Likely to Rob a Bank',
    })
    const user3 = await User.create({
        email: 'cando@example.com',
        password: 'password',
        firstName: 'Mister',
        lastName: 'Meeseeks',
        superlative: 'Most Likely to Get it DONE',
    })

    const image1 = await Image.create({
        url: 'photo'
    })

    const groupApple = await Group.create({
        name: 'Bar Buddies',
        BannerId: image1.id
    })

    const membership1 = await Membership.create({
        UserId: user1.id,
        GroupId: groupApple.id,
    })
    const membership2 = await Membership.create({
        UserId: user2.id,
        GroupId: groupApple.id,
    })
    const membership3 = await Membership.create({
        UserId: user3.id,
        GroupId: groupApple.id,
    })

    const event = await Event.create({
        name: "Game Night",
        location: "MJ's House",
        date: "08/10/2019",
        isActive: true,
    })
    groupApple.addEvent(event)
    user1.addEvent(event)

    const eventPhoto1 = await EventPhoto.create({
        url: "photos.org",
        date: "08/10/2019",
    })

    event.addEventPhoto(eventPhoto1)

}

models.sequelize.sync().then(() => {
    seedDatabase()
})

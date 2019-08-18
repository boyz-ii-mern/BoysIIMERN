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

    await User.create({
        email: 'his@email.com',
        password: 'password',
        firstName: 'Monty',
        lastName: 'Burns',
        superlative: 'Most Likely to Be Rich',
    })
    
    await User.create({
        email: 'her@email.com',
        password: 'password',
        firstName: 'Minnie',
        lastName: 'Mouse',
        superlative: 'Most Likely to Be A Polka Dotted Mouse',
    })

    const image1 = await Image.create({
        url: 'photo'
    })

    const groupApple = await Group.create({
        name: 'Bar Buddies',
        BannerId: image1.id
    })

    await Membership.create({
        UserId: user1.id,
        GroupId: groupApple.id,
    })
    await Membership.create({
        UserId: user2.id,
        GroupId: groupApple.id,
    })
    await Membership.create({
        UserId: user3.id,
        GroupId: groupApple.id,
    })

    const event1 = await Event.create({
        name: "Game Night",
        location: "MJ's House",
        date: "08/10/2019",
        isActive: true,
    })
    await groupApple.addEvent(event1)
    await user1.addEvent(event1)

    const event2 = await Event.create({
        name: "Dance Party",
        location: "Berlin",
        date: "08/30/2019",
        isActive: true,
    })
    await groupApple.addEvent(event2)
    await user2.addEvent(event2)

    const eventPhoto1 = await EventPhoto.create({
        url: "samplerphotouno.org",
        date: "08/10/2019",
    })
    await event1.addEventPhoto(eventPhoto1)

    const eventPhoto2 = await EventPhoto.create({
        url: "photos.org",
        date: "08/10/2019",
    })
    await event2.addEventPhoto(eventPhoto2)

    const eventPhoto3 = await EventPhoto.create({
        url: "samplephoto3.org",
        date: "08/10/2019",
    })
    await event1.addEventPhoto(eventPhoto3)

    const comment1 = await Comment.create({
       body: "This is gonna be a great party"
    })
    await event1.addComment(comment1)
    await user1.addComment(comment1)

    const comment2 = await Comment.create({
        body: "I'm gonna have a good time"
     })
     await event1.addComment(comment2)
     await user2.addComment(comment2)

    const superlative1  = await Superlative.create({
        text: "Most Likely to Finish the Treasure Hunt"
    }) 
    await event1.addSuperlative(superlative1)
    await user1.addEventSuperlative(superlative1)

    const superlative2  = await Superlative.create({
        text: "Most Likely to Drink all the Whiskey"
    }) 
    await event1.addSuperlative(superlative2)
    await user2.addEventSuperlative(superlative2)

}

models.sequelize.sync().then(() => {
    seedDatabase()
})

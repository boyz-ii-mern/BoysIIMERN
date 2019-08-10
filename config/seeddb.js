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

    const member1 = await Membership.create({
        UserId: user1.id,
        GroupId: groupApple.id,
    })
    const member2 = await Membership.create({
        UserId: user2.id,
        GroupId: groupApple.id,
    })
    const member3 = await Membership.create({
        UserId: user3.id,
        GroupId: groupApple.id,
    })
}

models.sequelize.sync().then(() => {
    seedDatabase()
})

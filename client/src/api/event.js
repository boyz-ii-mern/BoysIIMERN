import axios from "axios";

async function getDetails(eventId) {
    try {
        // const res = await axios.get
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function getAllByUserId(userId) {
    try {
        // const res = await axios.get
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function getAllByGroupId(groupId) {
    try {
        // const res = await axios.get
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function create(name, location, date, groupId, userId) {
    try {
        // const res = await axios.post
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function update(eventId, name, location, date, isActive) {
    try {
        // const res = await axios.put
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function remove(eventId) {
    try {
        // const res = await axios.delete
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function getPhotos(eventId) {
    try {
        // const res = await axios.get
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function addPhoto(eventId, url, date) {
    try {
        // const res = await axios.post
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function removePhoto(photoId) {
    try {
        // const res = await axios.delete
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function getComments(eventId) {
    try {
        // const res = await axios.get
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function addComment(eventId, body, userId) {
    try {
        // const res = await axios.post
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function removeComment(commentId) {
    try {
        // const res = await axios.delete
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

export default {
    getDetails,
    getAllByUserId,
    getAllByGroupId,
    create,
    update,
    remove,
    getPhotos,
    addPhoto,
    removePhoto,
    getComments,
    addComment,
    removeComment,
}
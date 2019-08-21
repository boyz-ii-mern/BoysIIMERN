import axios from "axios";

async function getEventSuperlatives(eventId) {
    try {
        const res = await axios.get(`/api/superlatives/byEvent/${eventId}`, {
        })
        if (res.data) {
            return res.data
        } else {
            return res
        }
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function addSuperlative(eventId, text, userId) {
    try {
        const res = await axios.post(`/api/superlatives/byEvent/${eventId}`, {
            "userId": userId,
            "text": text,
        })
        if (res.data) {
            return res.data
        } else {
            return res
        }
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function removeSuperlative(commentId) {
    try {
        // const res = await axios.delete
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

export default {
    getEventSuperlatives,
    addSuperlative,
    removeSuperlative
}
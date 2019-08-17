import axios from "axios";

async function getDetails(groupId) {
    try {
        const res = await axios.get(`/api/groups/${groupId}`)
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

async function getAllByUserId(userId) {
    try {
        const res = await axios.get(`/api/groups/${userId}`)
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

async function create(name, bannerImageUrl, memberIds) {
    try {
        const res = await axios.post("/api/groups/", {
            "name": name,
            "bannerImage": bannerImageUrl,
            "members": memberIds,
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

// need to work on this one-----
async function remove(groupId) {
    try {
        const res = await axios.delete(`/api/groups/${groupId}`)
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}
// ------------------------------

async function getMembers(groupId) {
    try {
        // const res = await axios.get

    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function addMember(userId) {
    try {
        // const res = await axios.post
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function removeMember(userId) {
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
    create,
    remove,
    getMembers,
    addMember,
    removeMember,
}
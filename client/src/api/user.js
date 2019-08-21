import axios from "axios";

async function login(username, password) {
    try {
        const res = await axios.post("/api/user/login", {
            "username": username,
            "password": password
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

async function logout() {
    try {
        const res = await axios.post("/api/user/logout")
        // user should check if res.ok or res.error
        return res
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}

async function getProfile(userId) {
    try {
        const res = await axios.get(`/api/user/profile/${userId}`)
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

async function signUp(email, password, firstName, lastName, avatar, superlative) {
    try {
        const res = await axios.post("/api/user/signup", {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "avatar": avatar,
            "superlative": superlative
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

async function allEventsAttending(userId) {
    try {
        const res = await axios.get(`/api/groups/byUser/${userId}`)
        if (res.data) {
            const events = res.data.data.groups.flatMap(group => {
                return group.Events
            })
            return {
                data: events
            }
        } else {
            return res
        }
    } catch (err) {
        console.error(err)
        return { error: err.message }
    }
}


export default {
    login,
    logout,
    getProfile,
    signUp,
    allEventsAttending
}
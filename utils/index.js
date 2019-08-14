function throwIfNull(obj, message) {
    if (!obj) {
        throw new Error(message)
    }
}

function isNotNullOrUndefined(obj) {
    return !(obj === null || obj === undefined)
}

module.exports = {
    throwIfNull,
    isNotNullOrUndefined
}
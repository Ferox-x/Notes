
function createNoticeServices (createFunc, message) {
    let id = Date.now()
    createFunc(id, message)
}

export {createNoticeServices}

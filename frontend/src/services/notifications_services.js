
function createNoticeServices (createFunc, message, color) {
    let id = Date.now()
    createFunc(id, message, color)
}

export {createNoticeServices}

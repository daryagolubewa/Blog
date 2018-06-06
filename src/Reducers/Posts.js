import addPost from '../Actions/Actions'

const initialState = {
    posts: []
}

function blogApp(state, action) {
    if (typeof state === "undefined") {
        return initialState
    }
    return state
}
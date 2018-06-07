

const posts = (state = [], action) => {
    if (action.type) {
        return  [
            ...state,
            {
                userName: action.userName,
                title: action.title,
                text: action.text
            }
        ]
    }
    return state
}


export default posts;

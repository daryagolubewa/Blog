

const posts = (state = [], action) => {
    if (action.type === 'ADD_POST') {
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

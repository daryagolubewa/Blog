

const posts = (state = [], action) => {
    if (action.type === 'ADD_POST') {
        return  [
            ...state,
            {
                userName: action.userName,
                title: action.title,
                text: action.text,
                likesNumber: action.likesNumber,
                likesNumberId: action.likesNumberId

            }
        ]
    }
    return state
}

export default posts;

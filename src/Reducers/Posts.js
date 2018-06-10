

const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
        return  [
            ...state,
            {
                userName: action.userName,
                title: action.title,
                text: action.text,
                likesNumber: action.likesNumber,
                id: action.id

            }
        ]
        case 'ADD_LIKE':
            return state.map(post =>
                (post.id === action.id)
                ? {...post, likeNumbers: post.likeNumbers + 1} : post
            )

    }
    return state
}

export default posts;





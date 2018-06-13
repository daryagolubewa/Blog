

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
                id: action.id,
                comments: []

            }
        ]
        case 'LIKE':
            return state.map(post =>
                (post.id === action.id)
                ? {...post, likesNumber: post.likesNumber + 1} : post
            )
        case 'DISLIKE':
            return state.map(post =>
                (post.id === action.id)
            ? {...post, likesNumber: post.likesNumber - 1} : post
            )
        case 'ADD_COMMENT':
            return state.map(post =>
                (post.id === action.postId)
                    ? {...post, comments: [...post.comments, {
                        userName: action.userName,
                        text: action.text,
                        id: action.id
                    }]}
                    : post
            )
    }
    return state
}

export default posts;






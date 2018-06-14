

const posts = (state = [{
    title: 'Что-то грядёт',
    userName: 'Пафнутий Иванович',
    text: 'Здесь был Вася.',
    likesNumber: 5,
    id: 0,
    comments: [ { userName: 'Василий Петрович',
        text: 'Как тонко и необычно, сударь мой!',
        id: 0
    }]
}], action) => {
    switch (action.type) {
        case 'ADD_POST':
        return  [
            ...state,
            {
                title: action.title,
                userName: action.userName,
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







export const addPost = (userName, title, text) => ({
    type: 'ADD_POST',
    userName,
    title,
    text
})

export const addComment = (userName, text) => ({
    type: "ADD_COMMENT",
    userName,
    text
})

export const Likes = (number) => ({
    type: 'ADD_LIKE',
    number
})
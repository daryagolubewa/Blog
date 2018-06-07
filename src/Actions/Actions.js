
export const addPost = (userName, title, text, likesNumber) => ({
    type: 'ADD_POST',
    userName,
    title,
    text,
    likesNumber

})

export const addComment = (userName, text) => ({
    type: "ADD_COMMENT",
    userName,
    text
})

export const Likes = () => ({
    type: 'ADD_LIKE',
})
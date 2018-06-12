
let postId = 0;
export const addPost = (userName, title, text) => ({
    type: 'ADD_POST',
    userName,
    title,
    text,
    likesNumber: 0,
    id: postId++

})

let commentIt = 0;
export const addComment = (userName, text) => ({
    type: "ADD_COMMENT",
    userName,
    text,
    id: commentId++
})


export const Like = (id) => ({
    type: 'LIKE',
    id
})

export const Dislike = (id) => ({
     type: 'DISLIKE',
     id
    }
)
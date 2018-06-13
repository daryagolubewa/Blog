import React from 'react'
import PropTypes from 'prop-types'
import Comment from '../Components/Comments'
import AddComment from '../Containers/AddComment'

const CommentList = ({ comments, postId }) => (
    <div>
        {comments.map(comment =>
            <Comment
                key={comment.id}
                {...comment}
            />
        )}
        <AddComment postId={postId} />
    </div>
)

export default CommentList


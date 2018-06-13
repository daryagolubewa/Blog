import React from 'react'
import PropTypes from 'prop-types'
import LikeButtons from '../Components/LikeButtons'
import CommentList from '../Components/CommentList'
import { Grid, Row, Col } from 'react-bootstrap'
const Post = ({id, userName, title, text, likeButton, likesNumber, dislikeButton, comments}) => (
    <div>

        <p> {userName} </p>
        <p> {title} </p>
        <p> {text} </p>
        <LikeButtons likesNumber={likesNumber} likeButton={likeButton} dislikeButton={dislikeButton}/>
        <CommentList postId={id} comments={comments}/>

    </div>
)

Post.propTypes = {
    userName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Post

//displaying current post

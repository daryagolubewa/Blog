import React from 'react'
import PropTypes from 'prop-types'
import LikeButtons from '../Components/LikeButtons'

const Post = ({userName, title, text, likeButton, likesNumber, dislikeButton}) => (
    <div>
        <p> {userName} </p>
        <p> {title}</p>
        <p> {text}</p>
        <LikeButtons likesNumber={likesNumber} likeButton={likeButton} dislikeButton={dislikeButton} />


    </div>
)

Post.propTypes = {
    userName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Post
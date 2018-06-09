import React from 'react'
import PropTypes from 'prop-types'
import Like from '../Actions/Actions'
import Post from '../Actions/Actions'

const LikeButtons = ({likeButton, likesNumber, dislikeButton}) => (
<div>
    <button onClick={likeButton}> + </button>
    <p>{likesNumber}</p>
    <button onClick={dislikeButton}> - </button>
</div>
)



LikeButtons.PropTypes = {
    likeButton: PropTypes.func.isRequired,
    likesNumber: PropTypes.number.isRequired,
    dislikesButton: PropTypes.func.isRequired
}

export default LikeButtons
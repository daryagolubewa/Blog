import React from 'react'
import PropTypes from 'prop-types'


const LikeButtons = ({likeButton, likesNumber, dislikeButton}) => (
<div>
    <button onClick={likeButton}> + </button>
    <p>{likesNumber}</p>
    <button onClick={dislikeButton}> - </button>
</div>
)



LikeButtons.propTypes = {
    likeButton: PropTypes.func.isRequired,
    likesNumber: PropTypes.number.isRequired,
    dislikeButton: PropTypes.func.isRequired
}

export default LikeButtons

//смотрите, кнопки
import React from 'react'
import PropTypes from 'prop-types'
import Like from '../Actions/Actions'
import Post from '../Actions/Actions'

const LikeButton = ({onClick, id, likesNumber}) => (
<div>
    <button onClick={onClick}
            id={id}
    >Like {id}, {likesNumber} </button>
</div>
)

LikeButton.propTypes = {
onClick: PropTypes.func.isRequired,
    likesNumber: PropTypes.number.isRequired

}

export default LikeButton

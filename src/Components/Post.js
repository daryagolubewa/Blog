import React from 'react'
import PropTypes from 'prop-types'

const Post = ({userName, title, text}) => (
    <div>
        <p> {userName} </p>
        <p> {title}</p>
        <p> {text}</p>

    </div>
)

Post.propTypes = {
    userName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Post
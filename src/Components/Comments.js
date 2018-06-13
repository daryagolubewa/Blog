import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({userName, text}) => (
    <div>
        <p> {userName} </p>
        <p> {text} </p>
    </div>
)

Comment.propTypes = {
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment

//якобы показывает комменты
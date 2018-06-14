import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, ButtonToolbar, Row, Col, Glyphicon} from 'react-bootstrap'


const LikeButtons = ({likeButton, likesNumber, dislikeButton}) => (
    <ButtonGroup bsSize='small'>
        <Button onClick={likeButton}>
            <Glyphicon glyph='star'/> + </Button>
        <Button>{likesNumber}</Button>
        <Button onClick={dislikeButton}>
            <Glyphicon glyph='star'/> - </Button>
    </ButtonGroup>
)



LikeButtons.propTypes = {
    likeButton: PropTypes.func.isRequired,
    likesNumber: PropTypes.number.isRequired,
    dislikeButton: PropTypes.func.isRequired
}

export default LikeButtons

//смотрите, кнопки
import React from 'react'
import PropTypes from 'prop-types'
import LikeButtons from '../Components/LikeButtons'
import CommentList from '../Components/CommentList'
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap'

const Post = ({id, title, userName, text, likeButton, likesNumber, dislikeButton, comments}) => (
        <div>
        <Panel bsStyle='success'>
            <Panel.Heading>
                <Panel.Title componentClass="h3"> {title} </Panel.Title>
            </Panel.Heading>
            <Panel.Body> {userName} </Panel.Body>
            <ListGroup>
                <ListGroupItem> {text} </ListGroupItem>
            </ListGroup>
            <LikeButtons likesNumber={likesNumber} likeButton={likeButton} dislikeButton={dislikeButton}/>
        </Panel>
        <CommentList postId={id} comments={comments}/>
    </div>
)

Post.propTypes = {
    title: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Post

//displaying current post


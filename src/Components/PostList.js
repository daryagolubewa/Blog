import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Components/Post'
import { Grid, Row, Col, Panel } from 'react-bootstrap'


const PostList = ({posts, Like, Dislike}) => (
    <Row>
        <Col md={8}>
        {posts.map(post =>
            <Post
                key={post.id}
                {...post}
                likeButton={() => Like(post.id)}
                dislikeButton={() => Dislike(post.id)}

            />
        )}
        </Col>
    </Row>
)


/*PostList.propTypes = {

}*/

export default PostList

//тут типа все посты, которые есть
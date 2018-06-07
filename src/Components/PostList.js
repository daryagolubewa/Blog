import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Components/Post'

const PostList = ({ posts }) => (
    <div>
        {posts.map(post =>
            <Post
                {...post}
            />
        )}
    </div>
)

PostList.propTypes = {

}
import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Components/Post'
import addPost from '../Actions/Actions'

const PostList = ({ posts }) => (
    <div>
        {posts.map(post =>
            <Post
                    key={post.id}
                    {...post}
                />
        )}
    </div>
)

/*PostList.propTypes = {

}*/

export default PostList
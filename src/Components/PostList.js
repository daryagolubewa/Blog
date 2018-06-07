import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Components/Post'

const PostList = ({ posts }) => (
    <div>
        {
            posts.map(post => {
                debugger
                return <Post
                    {...post}
                />}
        )}
    </div>
)

/*PostList.propTypes = {

}*/

export default PostList
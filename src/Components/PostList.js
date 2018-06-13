import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Components/Post'


const PostList = ({posts, Like, Dislike}) => (
    <div>
        {posts.map(post =>
            <Post
                key={post.id}
                {...post}
                likeButton={() => Like(post.id)}
                dislikeButton={() => Dislike(post.id)}

            />
        )}

    </div>
)


/*PostList.propTypes = {

}*/

export default PostList

//тут типа все посты, которые есть
import PostList from '../Components/PostList'
import { connect } from 'react-redux'
import { Like } from '../Actions/Actions'
import { Dislike } from '../Actions/Actions'

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
    Like: id => dispatch(Like(id)),
    Dislike: id => dispatch(Dislike(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList)

//добавленные посты (?)
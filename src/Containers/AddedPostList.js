import PostList from '../Components/PostList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(
    mapStateToProps
)(PostList)
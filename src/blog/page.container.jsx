import React from 'react'
import { connect } from 'react-redux'
import { fetchBlogPosts } from './blog.action'

class BlogPage extends React.Component {
  // https://reactjs.org/docs/react-component.html

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.events = {
      requestLatestPosts: props.requestLatestPosts
    }
  }

  componentWillMount() {
    this.events.requestLatestPosts()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return null
  }
}

const mapStateToProps = state => {
  return {
    posts: state.Blog.posts,
    loading: state.Blog.loading,
    error: state.Blog.error
  }
}

const mapDispatchToEvents = dispatch => {
  return {
    requestLatestPosts: (event) => {
      dispatch(fetchBlogPosts())
    }
   }
}

export default connect(mapStateToProps, mapDispatchToEvents)(BlogPage) 

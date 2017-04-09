import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from './Post'
import * as postsActions from '../actions/posts_actions'
import '../styles/Posts.css'


class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
        this._resetLoading = this._resetLoading.bind(this)
    }

    _resetLoading() {
        this.setState({ loading: false })
    }

    componentDidMount() {
        this.setState(
            { loading: true },
            () => this.props.fetchPosts().then(this._resetLoading).catch(this._resetLoading)
        )
    }

    render() {
        return <div className="Posts-container">
            {this.props.items.map(post => <Post item={post} />)}
        </div>
    }
}

export default connect(
    state => ({
        items: state.posts
    }),
    dispatch => ({
        ...bindActionCreators(postsActions, dispatch)
    })
)(Posts)

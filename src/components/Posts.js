import React, { Component } from 'react';

import PropTypes from 'prop-types';   //规定类型
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class Posts extends Component {

    componentDidMount() {
        //触发action操作
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h3>Posts</h3>
                {postItems}
            </div>
        )
    }
}

// 定义类型  用当前的组件调用propTypes
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
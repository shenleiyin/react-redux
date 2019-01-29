import React, { Component } from 'react';

import PropTypes from 'prop-types';   //规定类型
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        //触发action
        this.props.createPost(post);

    }
    render() {
        return (
            <div>
                <h1>添加内容</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">title</label>
                        <br />
                        <input
                            type="text" name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="">body</label>
                        <br />
                        <textarea name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                        ></textarea>
                        <br />
                        <button type="submit">添加</button>
                    </div>
                </form>
            </div>
        )
    }
}

// 定义类型
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired
}



export default connect(null, { createPost })(PostForm);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { title, body } = this.state;
        if (title.length && body.length) {
            const post = {
                title: title,
                body: body
            };
            this.props.createPost(post).then(data => {
                let div = document.getElementById("success");
                div.style.display = 'block';
                this.setState(() => ({ title: '', body: '' }))
            });
        } else {
            alert("PLease fill both field");
        }

    }

    render() {
        return (<div className="container">
            <Header />
            <SearchBar />
            <div className="post-api" >
                <h3> JSON Placeholder add new  posts Rest api</h3>
                <p>Due to mockapi.io error in cross origin policy
                    <a href="https://60141809b538980017568b7f.mockapi.io/products" target="_blank">
                        https://60141809b538980017568b7f.mockapi.io/products</a>
                </p>

            </div>

            <div className="post-form">
                <div className="success-message" id="success"> Post has been successfully submitted</div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                            className="form-control"
                            required={true}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <Footer />
        </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
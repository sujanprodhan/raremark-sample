import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.props.fetchPosts().then((data) => {
            this.setState(({ posts: data }))
        });
    }

    render() {
        let { posts } = this.state || [];
        const postItems = posts && posts.map(post => (
            <div key={post.id}>
                <hr />
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (<>
            <div className="container">
                <Header />
                <SearchBar />
                <div className="post-api" > 
                <h3> JSON Placeholder get posts Rest api</h3>
                <p>Due to mockapi.io error in cross origin policy  
                    <a href="https://60141809b538980017568b7f.mockapi.io/products" target="_blank">
                     https://60141809b538980017568b7f.mockapi.io/products</a>    
                </p>
                </div>
                {postItems}
                <Footer />
            </div>
        </>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
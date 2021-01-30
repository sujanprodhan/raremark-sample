import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import ViewDetails from '../ViewDetails';


class Details extends Component {
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

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post).then(data => {
            console.log(' return data', data)
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar />
                <ViewDetails />
                <Footer />
            </div>
        );
    }
}

Details.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Details);
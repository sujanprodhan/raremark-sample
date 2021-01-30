import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import Search from '../search';


class SearchPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar />
                <Search />
                <Footer />
            </div>
        );
    }
}

export default SearchPage;
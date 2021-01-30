import React, { Component } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import Search from '../search';
import productsAPI from '../../API/api.json';
class SearchPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar />
                <Search data={productsAPI.data}/>
                <Footer />
            </div>
        );
    }
}

export default SearchPage;
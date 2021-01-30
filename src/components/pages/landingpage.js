import React, { Component } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import PropertyList from '../PropertyList';
import productsAPI from '../../API/api.json';

class Raremark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SearchBar />
                <PropertyList data={productsAPI.data} />
                <Footer />
            </div>
        );
    }
}

export default Raremark;
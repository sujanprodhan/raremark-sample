import React, { Component } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import ViewDetails from '../ViewDetails';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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

export default Details;
import React, { Component } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import SearchBar from '../searchbar';
import Search from '../search';
import productsAPI from '../../API/api.json';
class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productsAPI.data
        }
        this.searchingList = this.searchingList.bind(this);
    }
    searchingList = (param) => {
        let products = productsAPI.data.filter(function (item) {
            for (var key in param) {
                if (item[key] === undefined || item[key] != param[key])
                    return false;
            }
            return true;
        });
        this.setState(() => ({ products: products }))
    }

    render() {
        const { products } = this.state;
        return (
            <div className="container">
                <Header />
                <SearchBar callback={this.searchingList} />
                <Search data={[...products]} />
                <Footer />
            </div>
        );
    }
}

export default SearchPage;
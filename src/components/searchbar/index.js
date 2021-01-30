import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            rating: '',
            title: ''
        }
        this.country = this.country.bind(this);
        this.title = this.title.bind(this);
        this.rating = this.rating.bind(this);
        this.searchingData = this.searchingData.bind(this);
    }
    country(e) {
        this.setState({ country: e.target.value })
    }
    title(e) {
        this.setState({ title: e.target.value })
    }
    rating(e) {
        this.setState({ rating: e.target.value })
    }
    searchingData(e) {
        const { country, rating, title } = this.state;
        let searchParam = {};
        if (country.length) {
            Object.assign(searchParam, { country: country });
        }
        if (rating) {
            Object.assign(searchParam, { rating: rating });
        }
        if (title.length) {
            Object.assign(searchParam, { title: title });
        }
        this.props.callback(searchParam);
    }
    render() {
        const { country, rating, title } = this.state;
        return (
            <div className="searchbar">
                <div className="search-background">
                    <div className="search-title"> Resorts</div>
                    <div className="search-description"> Treat yourself!. Your dream resorts stay is just a few click away!!</div>
                </div>
                <div className="search-input-area">
                    <div className="row">
                        <div className="col-sm-4 ">
                            <span> <i className="fa  fa-map-marker"> </i></span>
                            <input type="text" value={country} onChange={(e) => this.country(e)} placeholder="Country" name="country" />
                        </div>
                        <div className="col-sm-3">
                            <span> <i className="fa fa-print"> </i></span>
                            <span><input type="text" value={title} placeholder="title" onChange={(e) => this.title(e)} name="title" /></span>
                        </div>
                        <div className="col-sm-3">
                            <span> <i className="fa fa-user"> </i></span> 
                            <select name="" onChange={(e) => this.rating(e)}>
                                <option value="0">Select Rating</option>
                                <option value="1">Rating 1</option>
                                <option value="2">Rating2</option>
                                <option value="3">Rating3</option>
                                <option value="4">Rating4</option>
                                <option value="5">Rating5</option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary" onClick={(e) => this.searchingData(e)}> Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
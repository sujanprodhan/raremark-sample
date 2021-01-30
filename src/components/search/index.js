import React, { Component } from 'react';
import './index.css';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <div className="search-product">
                {
                    data && data.map((item, index) => (
                        <div className="row item-list">
                            <div className="col-sm-4 cover">
                                <img src={item.image} alt="room" />
                            </div>
                            <div className="col-sm-8">
                                <div className="top-line">
                                    <span>{item.type}</span>
                                    <span>* {item.rating} (2020)</span>
                                </div>

                                <div className="product-title">{item.title} </div>
                                <div className="product-description">
                                    <span>3 guest </span>
                                    <span> 1 beed room </span>
                                    <span>2 Washroom </span>
                                    <span> Othes </span>
                                    <span>1 extra room </span>
                                </div>
                                <div className="text-description">
                                    {item.description}
                                </div>
                                <div className="rare-find-price">
                                    <div className="text-find">
                                        <i className="fa fa-search"></i>  Rare find?
                            </div>
                                    <div className="rare-price">
                                        <i className="fa fa-money"></i> {item.price} /night
                            </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        );
    }
}


export default Search;
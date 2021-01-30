import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <div className="search-background">
                    <div className="search-title"> Resorts</div>
                    <div className="search-description"> Treat yourself!. Your dream resorts stay is just a few click away!!</div>
                </div>
                <div className="search-input-area">
                    <div className="row">
                        <div className="col-sm-4 ">
                            <span> <i className="fa fa-print"> </i></span>
                            <span>More place than you could ever go</span>
                        </div>
                        <div className="col-sm-3">
                            <span> <i className="fa fa-print"> </i></span>
                            <span>Check in-check out</span>
                        </div>
                        <div className="col-sm-3">
                            <span> <i className="fa fa-user"> </i></span>
                            <span> Adult - child- room-date</span>
                        </div>
                        <div className="col-sm-2">
                            <input type="button" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
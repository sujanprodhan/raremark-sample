import React, { Component } from 'react';
import './index.css';

class PropertyList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="property-list">
                <div className="heading"> What guest are saying about home in  United Kingdom</div>
                <div className="short-info"> What guest are saying about home in  United Kingdom</div>
                 
                <div className="lists">
                    <div className="item">
                        <div className="image">
                            <img src="http://via.placeholder.com/300" alt="room" /></div>
                        <div className="rate">*****</div>
                        <div className="description">What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom</div>
                        <div className="user-area">
                            <div className="avatar">
                                <img src="http://via.placeholder.com/60" alt="room" />
                            </div>
                            <div className="user-info">
                                <div className="name">SUJAN</div>
                                <div className="country">Bangladesh</div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src="http://via.placeholder.com/300" alt="room" /></div>
                        <div className="rate">*****</div>
                        <div className="description">What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom</div>
                        <div className="user-area">
                            <div className="avatar">
                                <img src="http://via.placeholder.com/60" alt="room" />
                            </div>
                            <div className="user-info">
                                <div className="name">SUJAN</div>
                                <div className="country">Bangladesh</div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src="http://via.placeholder.com/300" alt="room" /></div>
                        <div className="rate">*****</div>
                        <div className="description">What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom What guest are saying about home in United Kingdom</div>
                        <div className="user-area">
                            <div className="avatar">
                                <img src="http://via.placeholder.com/60" alt="room" />
                            </div>
                            <div className="user-info">
                                <div className="name">SUJAN</div>
                                <div className="country">Bangladesh</div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}


export default PropertyList;
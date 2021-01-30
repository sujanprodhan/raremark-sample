import React, { Component } from 'react';
import './index.css';

class PropertyList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {data} = this.props;
        return (
            <div className="property-list">
                <div className="heading"> What guest are saying about home in  United Kingdom</div>
                <div className="short-info"> What guest are saying about home in  United Kingdom</div>
                 
                <div className="row lists">
                    {
                        data && data.map((item, index) => (
                            <div className="col-sm-4 item">
                            <div className="image">
                                <img src={item.image} alt="room" /></div>
                            <div className="rate">*****</div>
                            <div className="description">{item.title} </div>
                            <div className="user-area">
                                <div className="avatar">
                                    <img src={item.avatar} alt="room" />
                                </div>
                                <div className="user-info">
                                    <div className="name">{item.username}</div>
                                    <div className="country"> {item.country}</div>
                                </div>
                            </div>
                        </div>
                        ))
                    }

            
                </div>
               
            </div>
        );
    }
}


export default PropertyList;
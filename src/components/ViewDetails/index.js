import React, { Component } from 'react';
import './index.css';

class ViewDetails extends Component {
    render() {
        return (
            <div className="view-product">
                <div className="row">
                    <div className="banner">
                        <img height="300" src="https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png" alt="room" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="product-info">
                            <h2> Stylish spacioas double with view city</h2>
                            <div className="item-info">
                                <div className="title">
                                    <span className="icon"><i className="fa fa-user"></i></span>
                                    <span className="user">  Private room flat</span>
                                    <p>
                                        <span> 2 room </span>
                                        <span> 2 Kitchen </span>
                                        <span> 2 washrom </span>
                                        <span> 2 bedroom </span>
                                    </p>
                                </div>
                                <div className="title">
                                    <span className="icon"><i className="fa fa-user"></i></span>
                                    <span className="user">  Private room flat</span>
                                    <p>
                                        <span> 2 room </span>
                                        <span> 2 Kitchen </span>
                                        <span> 2 washrom </span>
                                        <span> 2 bedroom </span>
                                    </p>
                                </div>
                                <div className="title">
                                    <span className="icon"><i className="fa fa-user"></i></span>
                                    <span className="user">  Private room flat</span>
                                    <p>
                                        <span> 2 room </span>
                                        <span> 2 Kitchen </span>
                                        <span> 2 washrom </span>
                                        <span> 2 bedroom </span>
                                    </p>
                                </div>
                                <div className="title">
                                    <span className="icon"><i className="fa fa-user"></i></span>
                                    <span className="user">  Private room flat</span>
                                    <p>
                                        <span> 2 room </span>
                                        <span> 2 Kitchen </span>
                                        <span> 2 washrom </span>
                                        <span> 2 bedroom </span>
                                    </p>
                                </div>
                                <div className="title">
                                    <span className="icon"><i className="fa fa-user"></i></span>
                                    <span className="user">  Private room flat</span>
                                    <p>
                                        <span> 2 room </span>
                                        <span> 2 Kitchen </span>
                                        <span> 2 washrom </span>
                                        <span> 2 bedroom </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="product-price">
                            <div className="price"> <span>300 USD </span>per night</div>
                            <div className="rate"> ****</div>
                            <div className='date'>
                                <input className="form-control" type="date" placeholder="2021-01-30" />
                                <input className="form-control" type="date" placeholder="2021-01-30" />
                            </div>
                            <div className="guest">
                                <select className="form-control">
                                    <option> 2 Guest</option>
                                    <option> 2 Guest</option>
                                </select>
                            </div>
                            <div className="item-bar">
                                <div>Cleaning Fee ?</div>
                                <div> 10 USD</div>
                            </div>
                            <div className="item-bar">
                                <div>Service Charge ?</div>
                                <div> 16 USD</div>
                            </div>
                            <div className="item-bar">
                                <div>Op cost </div>
                                <div> 15 USD</div>
                            </div>

                            <div className="btn btn-danger form-control"> Reserved</div>
                            <p className="mark"> You won't change it latter. <br />
                             Certain reservation may need to security deposite</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default ViewDetails;
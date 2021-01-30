import React, { Component } from 'react';
import './layouts.css';

class Footer extends Component {
  render() {   
    return (
      <div className="footer">
          <div className="row">
              <div className="col-sm-3">
                  <select name="country" className="form-control">
                      <option value="1">Bangladesh</option>
                      <option value="2">India</option>
                  </select>
                  <select name="currency" className="form-control">
                      <option value="1">BDT</option>
                      <option value="2">USD</option>
                      <option value="2">INR</option>
                  </select>
              </div>
              <div className="col-sm-3">
                  <div className="footer-title">AirBNB</div>
                  <div className="footer-menu">
                      <ul>
                          <li><a href="#">About US</a></li>
                          <li><a href="#">Policy</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Contact US</a></li>
                          <li><a href="#">Help</a></li>
                          <li><a href="#">Diversity & belonging</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-sm-3">
              <div className="footer-title">Discovery</div>
                  <div className="footer-menu">
                      <ul>
                          <li><a href="#">Trust & Safety</a></li>
                          <li><a href="#">Travel</a></li>
                          <li><a href="#">Airbnb</a></li>
                          <li><a href="#">Contact US</a></li>
                          <li><a href="#">Help</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-sm-3">
              <div className="footer-title">Hosting</div>
                  <div className="footer-menu">
                      <ul>
                          <li><a href="#">Why Host</a></li>
                          <li><a href="#">Hospitability</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Community Center</a></li>
                          <li><a href="#">Help</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Footer;
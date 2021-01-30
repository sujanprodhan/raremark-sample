import React, { Component } from 'react';
import Header from '../layouts/header';
import Footer from '../layouts/footer';

class Raremark extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="test-assement">
                    <h1> Raremark UI/Assesment test</h1>
                    <h2> @By- Sujan (sujanitbd@gmail.com)</h2>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Raremark;
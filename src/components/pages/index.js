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
                    <p> Phone- 01740 095212</p>
                    <p> Task assetment github link: 
                        <a href="https://github.com/sujanprodhan/raremark-sample"> Click Here</a>
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Raremark;
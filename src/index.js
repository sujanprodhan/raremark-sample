import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';
import Posts from './components/Posts';
import reset from './constants/css/reset';
import AddNewPost from './components/AddNewPost';

import Raremark from './components/pages/index';
import LandingPage from './components/pages/landingpage';
import "./css/styles.css";

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment> 
            <Provider store={store}>
                <Switch>
                    {/* 
                    </Route>
                    <Route path="/posts" exact>
                        <Posts />
                    </Route>
                    <Route path="/add-new-post" exact>
                        <AddNewPost />
                    </Route> */}
                    <Route path="/" exact>
                        <Raremark />
                    </Route>
                    <Route path="/landing-page" exact>
                        <LandingPage />
                    </Route>
                </Switch>
            </Provider>
            <GlobalStyle />
           
        </Fragment>

    </BrowserRouter>,
    document.getElementById('root')
);

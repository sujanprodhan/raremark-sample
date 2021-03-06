import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
import App from './components/App';
import Posts from './components/pages/posts';
import reset from './constants/css/reset';
import AddNewPost from './components/pages/addNewPosts';

import Raremark from './components/pages/index';
import LandingPage from './components/pages/landingpage';
import Details from './components/pages/details';
import Search from './components/pages/search';
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
           */}
                    <Route path="/" exact>
                        <Raremark />
                    </Route>
                    <Route path="/landing-page" exact>
                        <LandingPage />
                    </Route>
                    <Route path="/details" exact>
                        <Details />
                    </Route>
                    <Route path="/search" exact>
                        <Search />
                    </Route>
                    <Route path="/posts" exact>
                        <Posts />
                    </Route>
                    <Route path="/add-new-post" exact>
                        <AddNewPost />
                    </Route>
                </Switch>
            </Provider>
            <GlobalStyle />
           
        </Fragment>

    </BrowserRouter>,
    document.getElementById('root')
);

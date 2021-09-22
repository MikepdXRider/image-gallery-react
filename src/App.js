import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import GalleryPage from './GalleryPage.js';
import HomePage from './HomePage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/GalleryPage" 
                            exact
                            render={(routerProps) => <GalleryPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}

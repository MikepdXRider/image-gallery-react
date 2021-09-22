import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import dataArr from './data.js';


export default class HomePage extends Component {
    render() {
        return (
            <main className="main-flex-container">
                <h1>Hello!</h1>
                <Link to='/GalleryPage'>
                    GalleryPage
                </Link>
                <img src={dataArr[0].url} alt='Horned Creature' />
            </main>
        )
    }
}

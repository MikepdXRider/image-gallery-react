import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataArr from './data.js';

const urlArr = dataArr.map((dataObj) => dataObj.url)

export default class HomePage extends Component {
    state = {
        acc: 0
    }
    
    switchImg = () => {
        if(this.state.acc === 19){
            this.setState({acc: 0})
        } else { 
            this.setState({acc: this.state.acc + 1})
        }
    }
    
    componentDidMount() {
        setInterval(()=> this.switchImg(), 1500)
    }

    render() {
        return (
            <main className="main-flex-container">
                <h1>Horned Animals</h1>
                <Link to='/GalleryPage'>
                    GalleryPage
                </Link>
                <img src={urlArr[this.state.acc]} alt='Horned Creature' />
            </main>
        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dataArr from './data.js';


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
        console.log(this.state.acc)
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
                <img src={dataArr[this.state.acc].url} alt='Horned Creature' />
            </main>
        )
    }
}

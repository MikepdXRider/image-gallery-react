import React, { Component } from 'react'
import Link from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <Link to='/GalleryPage'>
                    GalleryPage
                </Link>
            </div>
        )
    }
}

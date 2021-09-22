import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import GalleryComponent from './components/GalleryComponent.js';
import React, { Component } from 'react'
import Link from 'react-router-dom';



export default class GalleryPage extends Component {
  render() {
    return (
      <div>
        <>
          <HeaderComponent />
          <GalleryComponent />
          <Link to='/'>
          Home
          </Link>
        </>
      </div>
    )
  }
}
import React, { Component } from 'react'
import dataArr from '../data.js'
import DropdownComponent from './DropdownComponent.js';
import ImageListComponent from './ImageListComponent.js';


// Munges data to create an array of unique keywords.
const keywordArr = dataArr.map((dataObj) => dataObj.keyword);
const uniqueKeywordArr = keywordArr.filter((item, index) => keywordArr.indexOf(item) === index);


// Munges data to create an array of unique horn counts. - Courtesy of Dylan Floyd 🙌
const uniqueHornsArr = [...new Set(dataArr.map((dataObj) => dataObj.horns))]


export default class GalleryComponent extends Component {
    // Creates state
    state = {
        keyword: '',
        horns: ''
    }

    // Handles keyword selection change - used on line 28
    handleKeywordChange = (e) => {
        this.setState({keyword: e.target.value})
        console.log('updated keyword', this.state)
    }

    // Handles horns selection change - used on line 28
    handleHornsChange = (e) => {
        this.setState({horns: e.target.value})
        console.log('updated horns', this.state)
    }

    // Render method 
    render() {
        return (
           <main className='main-flex-container'>
                    <div className='flex-container'>
                        <DropdownComponent 
                        title = 'Creature Type:'
                        handleFunction = {this.handleKeywordChange}
                        filteredData = {uniqueKeywordArr}
                        />
                        <DropdownComponent 
                        title = 'Horn Qty:'
                        handleFunction = {this.handleHornsChange}
                        filteredData = {uniqueHornsArr}
                        />
                    </div>
                <ImageListComponent
                keyword={this.state.keyword}
                horns={this.state.horns}
                dataArr={dataArr}
                />
           </main>
        )
    }
}

import React, { Component } from 'react'
import dataArr from '../data.js'
import ImageListComponent from './ImageListComponent.js';


const keywordArr = dataArr.map((dataObj) => dataObj.keyword);
const uniqueKeywordArr = keywordArr.filter((item, index) => keywordArr.indexOf(item) === index);


// Courtesy of Dylan Floyd 🙌
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
    }

    // Handles horns selection change - used on line 28
    handleHornsChange = (e) => {
        this.setState({horns: e.target.value})
    }

    // Render method
    render() {
        return (
           <main className='main-flex-container'>
               {/* 🤷‍♀️ FilterListCompoenent?? */}
                    <div className='flex-container'>
                        <h4>Type:</h4>
                        <select onChange={this.handleKeywordChange}>
                            <option value=''>Show All Horned Creatures</option>
                            {
                                uniqueKeywordArr.map((keyword) => <option key={`${keyword}`} value={`${keyword}`}>{keyword}</option>)
                            }
                        </select>
                        <h4>Horns:</h4>
                        <select onChange={this.handleHornsChange}>
                            <option value=''>Show All Horned Creatures</option>
                            {
                                uniqueHornsArr.map((horn) => <option key={`${horn}`} value={`${horn}`}>{horn}</option>)
                            }
                        </select>
                    </div>
               {/* 🤷‍♀️  */}
                <ImageListComponent
                keyword={this.state.keyword}
                horns={this.state.horns}
                dataArr={dataArr}
                />
           </main>
        )
    }
}

import React, { Component } from 'react'
import images from '../data.js'


const keywordArr = images.map((image) => image.keyword);
const uniqueKeywordArr = keywordArr.filter((item, index) => keywordArr.indexOf(item) === index);

export default class ImageGalleryComponent extends Component {
    // Creates state
    state = {
        keyword: ''
    }
    
    handleSelectionChange = (e) => {
        this.setState({keyword: e.target.value})
    }

    // Render method
    render() {
        return (
           <main className='flex-container'>
               {/* FilterListCompoenent?? */}
               <div className='flex-container'>
                    <h4>Filter:</h4>
                    <select onChange={this.handleSelectionChange}>
                        {
                            uniqueKeywordArr.map((keyword) => {
                                return(
                                    <option value={`${keyword}`}>{keyword}</option>
                                )
                            })
                        }
                    </select>
               </div>
           </main>
        )
    }
}

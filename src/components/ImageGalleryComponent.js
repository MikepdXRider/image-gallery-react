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
           <main className='main-flex-container'>
               {/* 🤷‍♀️ FilterListCompoenent?? */}
                    <div className='flex-container'>
                        <h4>Filter:</h4>
                        <select onChange={this.handleSelectionChange}>
                            <option value=''>Show All Horned Createures</option>
                            {
                                uniqueKeywordArr.map((keyword) => {
                                    return(
                                        <option key={`${keyword}`} value={`${keyword}`}>{keyword}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
               {/* 🤷‍♀️  */}
               <div className='flex-container'>
                    <ul className='image-galley'>
                        {
                            images.filter((dataObj) => {
                              return this.state.keyword === '' ? true : dataObj.keyword === this.state.keyword
                            })
                            .map((dataObj) => {
                                return(
                                    <li key={`${dataObj.id}`} className='main-flex-container'>
                                        <h4>{`${dataObj.title}`}</h4>
                                        <img src={`${dataObj.url}`} alt={`${dataObj.title}`}/>
                                        <p>{`${dataObj.description}`}</p>
                                        <p>The {`${dataObj.title}`} has {`${dataObj.horns}`} horn(s)</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
               </div>
           </main>
        )
    }
}

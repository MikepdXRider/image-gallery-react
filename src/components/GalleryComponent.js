// import React, { Component } from 'react'
// import images from '../data.js'
// import ImageListComponent from './ImageListComponent.js';


// const keywordArr = images.map((image) => image.keyword);
// const uniqueKeywordArr = keywordArr.filter((item, index) => keywordArr.indexOf(item) === index);


// export default class GalleryComponent extends Component {
//     // Creates state
//     state = {
//         keyword: ''
//     }
    
//     // Handles selectio change - used on line 28
//     handleSelectionChange = (e) => {
//         this.setState({keyword: e.target.value})
//     }

//     // Render method
//     render() {
//         return (
//            <main className='main-flex-container'>
//                {/* 🤷‍♀️ FilterListCompoenent?? */}
//                     <div className='flex-container'>
//                         <h4>Filter:</h4>
//                         <select onChange={this.handleSelectionChange}>
//                             <option value=''>Show All Horned Createures</option>
//                             {
//                                 uniqueKeywordArr.map((keyword) => {
//                                     return(
//                                         <option key={`${keyword}`} value={`${keyword}`}>{keyword}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                     </div>
//                {/* 🤷‍♀️  */}
//                 <ImageListComponent
//                 keyword={this.state.keyword}
//                 />
//            </main>
//         )
//     }
// }

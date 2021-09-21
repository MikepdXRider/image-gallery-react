// import React, { Component } from 'react'
// import images from '../data.js'

// export default class ImageListComponent extends Component {
//     render() {
//         return (
//                 <div className='flex-container'>
//                     <ul className='image-galley'>
//                         {
//                             images.filter((dataObj) => {
//                               return this.props.keyword === '' ? true : dataObj.keyword === this.props.keyword
//                             })
//                             .map((dataObj) => {
//                                 return(
//                                     <li key={`${dataObj.id}`} className='main-flex-container'>
//                                         <h4>{`${dataObj.title}`}</h4>
//                                         <img src={`${dataObj.url}`} alt={`${dataObj.title}`}/>
//                                         <p>{`${dataObj.description}`}</p>
//                                         <p>The {`${dataObj.title}`} has {`${dataObj.horns}`} horn(s)</p>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </div>
//         )
//     }
// }

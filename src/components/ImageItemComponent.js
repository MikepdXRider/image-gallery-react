import React, { Component } from 'react'

export default class ImageItemComponent extends Component {
    render() {
        const dataObj = this.props.dataObj
        return (
            <li className='main-flex-container'>
                <h4>{`${dataObj.title}`}</h4>
                <img src={`${dataObj.url}`} alt={`${dataObj.title}`}/>
                <p>{`${dataObj.description}`}</p>
                <p>The {`${dataObj.title}`} has {`${dataObj.horns}`} horn(s)</p>
            </li>
        )
    }
}

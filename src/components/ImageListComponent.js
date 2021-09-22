import React, { Component } from 'react'
import ImageItemComponent from './ImageItemComponent.js'


// Recieves a filtered dataArr from parent
export default class ImageListComponent extends Component {
    render() {
        const dataArr = this.props.dataArr
        const keyword = this.props.keyword
        const horns = this.props.horns
        return (
            <div className='flex-container'>
                <ul className='image-galley'>
                    {
                        dataArr.filter((dataObj) => keyword === '' ? true : dataObj.keyword === keyword)
                                            .filter((dataObj) => horns === '' ? true : dataObj.horns === Number(horns))
                                            .map((dataObj) => {
                            return(
                                <ImageItemComponent key={dataObj.id}
                                dataObj ={dataObj} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

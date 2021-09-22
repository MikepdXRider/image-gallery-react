import React, { Component } from 'react'

export default class GalleryFilter extends Component {
    render() {
        const handleFunction = this.props.handleFunction
        const title = this.props.title
        const filteredData = this.props.filteredData
        return (
            <>
            <h4>{title}</h4>
            <select onChange={handleFunction}>
                <option value=''>Show All Horned Creatures</option>
                {
                    filteredData.map((data) => <option key={`${data}`} value={`${data}`}>{data}</option>)
                }
            </select>
            </>
        )
    }
}

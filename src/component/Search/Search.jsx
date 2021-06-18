import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="row my-3 container">
                <div className="col-6">
                    <input type="search" className="form-control" placeholder="Search movies" aria-label="search" value={this.props.currSearchText} onChange={this.props.handleChange} />
                </div>
                <div className="col-3">
                    <input type="number" className="form-control" placeholder="Limit" aria-label="limit" value={this.props.limit} onChange={this.props.handleLimit}/>
                </div>
            </div>
        )
    }
}

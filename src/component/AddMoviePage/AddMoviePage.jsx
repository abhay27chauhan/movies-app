import React, { Component } from 'react'

export default class AddMoviePage extends Component {
    render() {
        return (
            <div className="container">
                <p className="lead mt-3">Fill out this form to a new movie</p>
                <form>
                    <div className="mb-3">
                        <label for="title" className="col-form-label">
                        Title:
                        </label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label for="genre" className="col-form-label">Genre:</label>
                        <input type="text" className="form-control" id="genre" />
                    </div>
                    <div className="mb-3">
                        <label for="quantity" className="col-form-label">Number in Stock:</label>
                        <input type="number" className="form-control" id="quantity" />
                    </div>
                    <div className="mb-3">
                        <label for="rate" className="col-form-label">Rate:</label>
                        <input type="number" className="form-control" id="rate" />
                    </div>
                    <button className="btn btn-primary btn-lg mb-3">
                        Add New Movie
                    </button>
                </form>
          </div>
        )
    }
}

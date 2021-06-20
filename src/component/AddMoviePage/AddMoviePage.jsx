import React, { Component } from 'react'

export default class AddMoviePage extends Component {
    state = {
        data: {
            title: "",
            genre: "",
            numberInStock: 0,
            rate: 0,
        }
    }

    handleChange = (e) => {
        let id = e.currentTarget.id;
        let value = e.target.value;
        let obj = this.state.data;

        let newObj = {...obj, [id]: value};

        this.setState({
            data: newObj
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state.data)
        this.setState({
            data: {
                title: "",
                genre: "",
                numberInStock: 0,
                rate: 0,
            }
        })
    }

    render() {
        let { title, genre, numberInStock, rate } = this.state;

        return (
            <div className="container">
                <p className="lead mt-3">Fill out this form to a new movie</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="col-form-label">
                        Title:
                        </label>
                        <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="col-form-label">Genre:</label>
                        <select className="form-select" id="genre" value={genre} onChange={this.handleChange}>
                            <option defaultValue>Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberInStock" className="col-form-label">Number in Stock:</label>
                        <input type="number" className="form-control" id="numberInStock" value={numberInStock} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rate" className="col-form-label">Rate:</label>
                        <input type="number" className="form-control" id="rate" value={rate} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary btn-lg mb-3">
                        Add New Movie
                    </button>
                </form>
          </div>
        )
    }
}

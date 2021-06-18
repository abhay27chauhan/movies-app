import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div className="row container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">
                                <i className="fas fa-sort-up" onClick={this.props.sortByStocks}></i>
                                Stock
                                <i className="fas fa-sort-down" onClick={this.props.sortByStocks}></i>
                            </th>
                            <th scope="col" onClick={this.sortByRatings}>
                                <i className="fas fa-sort-up" onClick={this.props.sortByRatings}></i>
                                Rate
                                <i className="fas fa-sort-down" onClick={this.props.sortByRatings}></i>
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.filteredMovies.map(movie => (
                                <tr key={movie._id}>
                                    <td className="col-4">{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td className="col-2">{movie.dailyRentalRate}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => (this.props.deleteMovie(movie._id))}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

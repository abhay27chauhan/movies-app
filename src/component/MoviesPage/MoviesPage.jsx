import React, { Component } from 'react'
import { getMovies } from '../../temp/MovieService'

import './MoviesPage.css';

export default class MoviesPage extends Component {
    state = {
        movies: getMovies(),
        currSearchText: "",
        pageNumber: 1,
        limit: 4
    }

    deleteMovie(id){
        let filteredMovies = this.state.movies.filter(movie => (movie._id !== id));
        this.setState({
            movies: filteredMovies
        })
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            currSearchText: value
        })
    }

    sortByStocks = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        let { movies } = this.state;

        if(className === "fas fa-sort-up"){
            sortedArr = movies.sort((a, b) => a.numberInStock - b.numberInStock)
        }else{
            sortedArr = movies.sort((a, b) => b.numberInStock - a.numberInStock)
        }

        this.setState({
            movies: sortedArr
        })
    }

    sortByRatings = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        let { movies } = this.state;

        if(className === "fas fa-sort-up"){
            sortedArr = movies.sort((a, b) => a.dailyRentalRate - b.dailyRentalRate)
        }else{
            sortedArr = movies.sort((a, b) => b.dailyRentalRate - a.dailyRentalRate)
        }

        this.setState({
            movies: sortedArr
        })
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        })
    }

    handleLimit = (e) => {
        let limit = Number(e.target.value);

        if(limit < 1){
            return;
        }

        this.setState({
            limit: limit
        })
    }

    render() {
        const {movies, currSearchText, pageNumber, limit} = this.state;
        let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(currSearchText.toLowerCase()));

        let numberOfPages = Math.ceil(filteredMovies.length / limit);
        let pageNumberArr = [];
        for(let i=0; i<numberOfPages; i++){
            pageNumberArr.push(i+1);
        }

        let si = (pageNumber-1)*limit;
        let ei = si+limit;
        filteredMovies = filteredMovies.slice(si, ei);

        return (
            <div className="row top-container px-2">
                <div className="col-3 genre-container pt-4">
                    <ul className="list-group">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                    </ul>
                </div>
                <div className="col-9 movies_list-container">
                    <div className="row my-3 p-2">
                        <div class="col-6">
                            <input type="search" class="form-control" placeholder="Search movies" aria-label="search" value={currSearchText} onChange={this.handleChange} />
                        </div>
                        <div class="col-3">
                            <input type="number" class="form-control" placeholder="Limit" aria-label="limit" value={limit} onChange={this.handleLimit}/>
                        </div>
                    </div>
                    <div className="row movies_list ms-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">
                                        <i className="fas fa-sort-up" onClick={this.sortByStocks}></i>
                                        Stock
                                        <i className="fas fa-sort-down" onClick={this.sortByStocks}></i>
                                    </th>
                                    <th scope="col" onClick={this.sortByRatings}>
                                        <i className="fas fa-sort-up" onClick={this.sortByRatings}></i>
                                        Rate
                                        <i className="fas fa-sort-down" onClick={this.sortByRatings}></i>
                                    </th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredMovies.map(movie => (
                                        <tr key={movie._id}>
                                            <td className="col-4">{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td className="col-2">{movie.dailyRentalRate}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" onClick={() => (this.deleteMovie(movie._id))}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="row ms-1">
                        <nav aria-label="...">
                            <ul className="pagination">
                                {
                                    pageNumberArr.map(page => {
                                        let additional = page === pageNumber ? "page-item active" : "page-item"
                                        return (
                                            <li className={additional} aria-current="page" onClick={() => this.handlePageChange(page)}>
                                                <span className="page-link">{page}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}


// do not change state while filtering on the basis of currSearchText
// can change state while deleting

// sort by default sort in alphabetical order
// to sort numerically -> need to pass a callback function
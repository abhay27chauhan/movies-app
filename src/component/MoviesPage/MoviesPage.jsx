import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Table from '../Table/Table';
import Genre from '../Genre/Genre'

export default class MoviesPage extends Component {
    state = {
        currSearchText: "",
        pageNumber: 1,
        limit: 4,
        cGenre: "All Genres"
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            currSearchText: value,
            pageNumber: 1
        })
    }

    sortByStocks = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        let { movies } = this.props;

        if(className === "fas fa-sort-up"){
            sortedArr = movies.sort((a, b) => a.numberInStock - b.numberInStock)
        }else{
            sortedArr = movies.sort((a, b) => b.numberInStock - a.numberInStock)
        }

        this.props.setMovies(sortedArr)
    }

    sortByRatings = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        let { movies } = this.props;

        if(className === "fas fa-sort-up"){
            sortedArr = movies.sort((a, b) => a.dailyRentalRate - b.dailyRentalRate)
        }else{
            sortedArr = movies.sort((a, b) => b.dailyRentalRate - a.dailyRentalRate)
        }

        this.props.setMovies(sortedArr)
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

    handleGenreChange = (genre) => {
        this.setState({
            cGenre: genre,
            pageNumber: 1
        })
    }

    render() {
        const {genres, currSearchText, pageNumber, limit, cGenre} = this.state;
        const {movies, deleteMovie} = this.props
        let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(currSearchText.toLowerCase()));

        if(cGenre !== "All Genres"){
            filteredMovies = filteredMovies.filter(movie => movie.genre.name === cGenre);
        }

        let numberOfPages = Math.ceil(filteredMovies.length / limit);
        let pageNumberArr = [];
        for(let i=0; i<numberOfPages; i++){
            pageNumberArr.push(i+1);
        }

        let si = (pageNumber-1)*limit;
        let ei = si+limit;
        filteredMovies = filteredMovies.slice(si, ei);

        return (
            <div className="row m-0 px-2">
                <div className="col-3 pt-4">
                    <Genre genres={genres} cGenre={cGenre} handleGenreChange={this.handleGenreChange} />
                </div>
                <div className="col-9">
                    <button
                        className="btn btn-primary btn-lg my-3 ms-4"
                    >
                        <Link to="/new" className="text-light" > Add New Movie </Link>
                    </button>
                    <Search currSearchText={currSearchText} handleChange={this.handleChange} limit={limit} handleLimit={this.handleLimit}/>

                    <Table filteredMovies={filteredMovies} deleteMovie={deleteMovie} sortByRatings={this.sortByRatings} sortByStocks={this.sortByStocks}/>
                    
                    <Pagination pageNumber={pageNumber} pageNumberArr={pageNumberArr} handlePageChange={this.handlePageChange}/>
                </div>
            </div>
        )
    }
}


// do not change state while filtering on the basis of currSearchText
// can change state while deleting

// sort by default sort in alphabetical order
// to sort numerically -> need to pass a callback function
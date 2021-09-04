import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import MoviesPage from './component/MoviesPage/MoviesPage';
import AddMoviePage from './component/AddMoviePage/AddMoviePage'
import Header from './component/Header/Header'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default class App extends Component {
  state = {
    movies: []
  }

  setMovies = (array) => {
    this.setState({
      movies: array
    })
  }

  addMovie = (obj) => {
    let { title, genre, numberInStock, rate } = obj;

    let genreObj = [{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }
    ];

    for (let i = 0; i < genreObj.length; i++) {
      if (genreObj[i].name === genre) {
        genre = genreObj[i]
      }
    }

    let movieObj = {
      _id: Date.now(),
      title,
      genre,
      dailyRentalRate: rate,
      numberInStock: numberInStock
    }
    this.setState({
      movies: [...this.state.movies, movieObj]
    })
  }

  deleteMovie = (id) => {
      let filteredMovies = this.state.movies.filter(movie => (movie._id !== id));
      this.setState({
          movies: filteredMovies
      })
  }

  async componentDidMount() {
        let resp = await fetch("https://react-backend101.herokuapp.com/movies");
        let moviesData = await resp.json()

        this.setState({
            movies: moviesData.movies
        })
    }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/new" render={props => (
            <AddMoviePage {...props} addMovie={this.addMovie}/>
          )} />
          <Route exact path="/movies-app" render={props => (
            <MoviesPage {...props} movies={this.state.movies} deleteMovie={this.deleteMovie} setMovies={this.setMovies}/>
          )} />
        </Switch>
      </div>
    )
  }
}

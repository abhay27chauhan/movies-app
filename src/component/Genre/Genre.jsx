import React, { Component } from 'react'

export default class Genre extends Component {
    state = {
        genres: [{id: 123456, name: "All Genres"}]
    }

    async componentDidMount() {
        let resp = await fetch("https://react-backend101.herokuapp.com/genres");
        let genresData = await resp.json();

        this.setState({
            genres: [...this.state.genres, ...genresData.genres]
        });
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.genres.map(gObj => {
                            let additional = gObj.name === this.props.cGenre ? "list-group-item active" : "list-group-item"
                            return (
                                <li className={additional} key={gObj.id} onClick={() => (this.props.handleGenreChange(gObj.name))}>{gObj.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

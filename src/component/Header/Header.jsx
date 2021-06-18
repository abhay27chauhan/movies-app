import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">Movie Rentals</Link>

                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a href="#learn" className="nav-link">What You'll Learn</a>
                        </li>
                        <li className="nav-item">
                        <a href="#questions" className="nav-link">Login</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

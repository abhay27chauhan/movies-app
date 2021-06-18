import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div className="row ms-1">
                <nav aria-label="...">
                    <ul className="pagination">
                        {
                            this.props.pageNumberArr.map(page => {
                                let additional = page === this.props.pageNumber ? "page-item active" : "page-item"
                                return (
                                    <li className={additional} aria-current="page" onClick={() => this.props.handlePageChange(page)} key={page}>
                                        <span className="page-link">{page}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

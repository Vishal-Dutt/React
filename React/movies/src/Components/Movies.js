import React, { Component } from 'react'
// Importing Normal Exprot file Using {} Destructuring
import { getMovies } from './getMovies'
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: getMovies(),
            currSearchText: ''
        }
    }

    handleChange = (e) => {
        let val = e.target.value;
        // console.log(val);
        this.setState({
            currSearchText: val
        })
    }

    onDelete = (id) => {
        let arr = this.state.movies.filter(function (movieObj) {
            return movieObj._id !== id;
        })
        // console.log(arr);
        this.setState({
            movies: arr
        });
    }

    sortByRatings = (e) => {
        let className = e.target.className;
        // console.log(className);
        let sortedMovies = [];
        if (className === 'fa fa-sort-asc') {
            // ascending order
            // a-b
            // If compareFunction(a, b) returns a value > than 0, sort b before a.
            // If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
            });

        } else {
            // Descending order
            // b - a
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            });
        }
        this.setState({
            movies: sortedMovies
        })
    }

    sortByStocks = (e) => {
        let className = e.target.className;
        // console.log(className);
        let sortedMovies = [];
        if (className === 'fa fa-sort-asc') {
            // ascending order
            // a-b
            // If compareFunction(a, b) returns a value > than 0, sort b before a.
            // If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.numberInStock - movieObjB.numberInStock;
            });

        } else {
            // Descending order
            // b - a
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.numberInStock - movieObjA.numberInStock;
            });
        }
        this.setState({
            movies: sortedMovies
        })
    }

    render() {
        let { movies, currSearchText } = this.state;   // ES6 Destructuring
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        } else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                // console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        // console.log("render");
        return (
            // JSX
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        Hello
                    </div>
                    <div className='col-9'>
                        <input type='search' value={this.state.currSearchText} onChange={this.handleChange}></input>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">
                                        <i onClick={this.sortByStocks} className="fa fa-sort-asc" aria-hidden="true"></i>
                                        Stock
                                        <i onClick={this.sortByStocks} className="fa fa-sort-desc" aria-hidden="true"></i>
                                    </th>
                                    <th scope="col">
                                        <i onClick={this.sortByRatings} className="fa fa-sort-asc" aria-hidden="true"></i>
                                        Rate
                                        <i onClick={this.sortByRatings} className="fa fa-sort-desc" aria-hidden="true"></i>
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredArr.map((movieObj) => {
                                        return (
                                            <tr key={movieObj._id}>
                                                <td></td>
                                                <td>{movieObj.title}</td>
                                                <td>{movieObj.genre.name}</td>
                                                <td>{movieObj.numberInStock}</td>
                                                <td>{movieObj.dailyRentalRate}</td>
                                                <td><button onClick={function () {
                                                    this.onDelete(movieObj._id)
                                                }.bind(this)} type="button" className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

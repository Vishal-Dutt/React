import React, { Component } from 'react'
// Importing Normal Exprot file Using {} Destructuring
// import { getMovies } from './getMovies'
import axios from 'axios';
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            // movies: getMovies(),
            movies: [],
            currSearchText: '',
            currPage: 1,
            limit: 4
        }
    }

    async componentDidMount() {
        console.log('Component Did Mount');
        let res = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        console.log(res.data.movies);
        this.setState({
            movies: res.data.movies
        })
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

    handlePageChange = (pageNumber) => {
        this.setState({ currPage: pageNumber })
    }
    render() {
        console.log("render");
        let { movies, currSearchText, currPage, limit } = this.state;   // ES6 Destructuring
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

        let numberofPages = Math.ceil(filteredArr.length / limit);
        let pageNumArr = [];
        for (let i = 0; i < numberofPages; i++) {
            pageNumArr.push(i + 1);
        }
        // PAGINATION
        let si = (currPage - 1) * limit;
        // let ei = si + limit - 1;
        let ei = si + limit;
        // .slice return a shallow copy of a portion of array ei no included
        filteredArr = filteredArr.slice(si, ei);

        // Don try to setState in render method until have very good satisfactory condition as it may lead to infinite cycle 
        // as in this case if movies array is empy array then the below condition is always true so the render method 
        // is called again and again so componentDidMount will no be called.
        // if(filteredArr.length===0){
        //     this.setState({
        //         currPage:1
        //     })
        // }

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
                        <nav aria-label="...">
                            <ul className="pagination">
                                {
                                    pageNumArr.map((pageNumber) => {
                                        let classStyle = pageNumber === currPage ? 'page-item active' : 'page-item';
                                        return (
                                            <li key={pageNumber} onClick={() => this.handlePageChange(pageNumber)} className={classStyle}><span className="page-link" >{pageNumber}</span></li>
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

{/* <li className="page-item"><a className="page-link" href="#">1</a></li>
<li className="page-item active" aria-current="page">
    <a className="page-link" href="#">2</a>
</li>
<li className="page-item"><a className="page-link" href="#">3</a></li> */}
//

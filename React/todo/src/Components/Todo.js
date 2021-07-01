import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Taks' }, { id: 3, txt: 'Third Task' }],
            currTask: ''
        }
    }

    handleChange = (e) => {
        let val = e.target.value;
        // console.log(val);
        this.setState({
            currTask: val
        })
    }

    handleSubmit = () => {
        // Do not mutate sate directly as re-render method will not call insted use setState method
        // this.state.tasks.push({ id: this.state.tasks.length + 1, txt: this.state.currTask });
        // this.state.currTask = '';
        // console.log(this.state);
        if (this.state.currTask !== '') {
            let narr = [...this.state.tasks, { id: this.state.tasks.length + 1, txt: this.state.currTask }];
            this.setState({
                tasks: narr,
                currTask: ''
            })
        }
    }

    onDelete = (id) => {
        let nfa = this.state.tasks.filter(function (tobj) {
            return tobj.id !== id
        })
        this.setState({
            tasks: nfa
        })
    }
    render() {
        // const tasks = [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Taks' }, { id: 3, txt: 'Third Task' }];
        return (
            // JSX Code

            <div>
                <div className="input-container">
                    {/* if input tag has state the must specify value attribute */}
                    <input value={this.state.currTask} onChange={this.handleChange} type='text'></input>
                    <button onClick={this.handleSubmit}>Add</button>
                </div>
                <div className="class-list">
                    <ul>
                        {/* JS Code */}
                        {
                            // or Make map fuction Arrow Function
                            this.state.tasks.map(function (tobj) {
                                return (
                                    <li key={tobj.txt}>
                                        <h1>{tobj.txt}</h1>
                                        {/* Wrong Method */}
                                        {/* <button onClick={this.onDelete(tobj.id)}>Delete</button> */}

                                        {/* The Below Approach is also wrong as fucntion defination is passed so the value of this is equal to undefined */}
                                        {/* <button onClick={function(){
                                            this.onDelete(tobj.id)
                                        }}>Delete</button> */}

                                        {/* Using Arrow Function */}
                                        {/* Function is passed to onClick event handler */}
                                        <button onClick={() => {
                                            this.onDelete(tobj.id)
                                        }}>Delete</button>
                                    </li>
                                )
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

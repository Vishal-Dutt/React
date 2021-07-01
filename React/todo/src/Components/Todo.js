import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const tasks = [{ id: 1, txt: 'First Task' }, { id: 2, txt: 'Second Taks' }, { id: 3, txt: 'Third Task' }];
        return (
            // JSX Code

            <div>
                <div className="input-container">
                    <input type='text'></input>
                    <button>Add</button>
                </div>
                <div className="class-list">
                    <ul>
                        {/* JS Code */}
                        {
                            tasks.map(function (tobj) {
                                return (
                                    <li>
                                        <h1>{tobj.txt}</h1>
                                        <button>Delete</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
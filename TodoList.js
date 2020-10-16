import React from 'react';
import './todo.css';

export default class Todoo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            arr: [],
            completed: [],
            disabled: false,
            complete: true
        }
    }

    handleTask = (e) => {
        this.setState({
            task: e.target.value

        });
        if (e.target.value) {
            this.setState({
                disabled: true
            });
        }
        else {
            this.setState({
                disabled: false
            })
        }

    }

    addTask = () => {
        var task1 = this.state.arr;
        task1.push({
            task1: this.state.task
        });
        this.setState({
            arr: task1
        })
    }
    deleteTask = (index) => {
        var task1 = this.state.arr;
        var completed = this.state.completed;
        completed.push(task1[index]);

        task1.splice(index, 1);
        this.setState({
            arr: task1,
            completed: completed
        })

    }

    render() {
        return (
            <div>
                <h1>Welcome to TodoList</h1>
                <ol>
                    {this.state.arr.map((s, index) => {
                        return (
                            <div>

                                <li>
                                    {s.task1}
                                    <button onClick={() => this.deleteTask(index)}>x</button>
                                </li>
                            </div>
                        )

                    })
                    }

                </ol>
                <input type='text' onChange={this.handleTask} placeholder='add a task' />
                <button disabled={this.state.disabled} onClick={this.addTask}>Add Task</button>
                <br />
                <div>
                    <br />
                    <h1>Completed Task</h1>

                    <ol>
                        {
                            this.state.completed.map((s) => {
                                return (
                                    <div>
                                        <li>

                                            {s.task1}
                                        </li>
                                    </div>
                                )
                            })}
                    </ol>
                </div>
            </div>

        )
    }
}


import React from 'react';
import { Button, TextField } from '@material-ui/core'

export default class Async extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            math: null,
            science: null,
            english: null,
            hindi: null,
            total: null,
            average: null

        }
    }
    handleMath = (e) => {
        this.setState({
            math: e.target.value,

        })
    }
    handleScience = (e) => {
        this.setState({
            science: e.target.value,

        })
    }
    handleEnglish = (e) => {
        this.setState({
            english: e.target.value,

        })
    }
    handleHindi = (e) => {
        this.setState({
            hindi: e.target.value,

        })
    }


    handleClick = () => {
        this.setState({
            total: parseInt(this.state.math) + parseInt(this.state.science) + parseInt(this.state.english) + parseInt(this.state.hindi)


        }, function () {
            this.setState({
                average: (this.state.total) / 4
            })
        })
    }
    render() {
        return (
            <div>
                <h4>Enter the mark of math:
                  <TextField value={this.state.math} onChange={this.handleMath} variant="outlined" color="primary" label='enter the mark' margin='dense' />
                </h4>
                <h4>Enter the mark of science:
                  <TextField value={this.state.science} onChange={this.handleScience} variant="outlined" color="primary" label='enter the mark' margin='dense' />
                </h4>
                <h4>Enter the mark of english:
                   <TextField value={this.state.english} onChange={this.handleEnglish} variant="outlined" color="primary" label='enter the mark' margin='dense' />
                </h4>
                <h4>Enter the mark of hindi:
                   <TextField value={this.state.hindi} onChange={this.handleHindi} variant="outlined" color="primary" label='enter the mark' margin='dense' />
                </h4>
                <h4>total mark:{this.state.total}
                </h4>
                <h4>average:{this.state.average}</h4><br />
                <Button onClick={this.handleClick} variant="contained" color="primary">
                    GET THE VALUES
                  </Button>
            </div>
        )
    }
}

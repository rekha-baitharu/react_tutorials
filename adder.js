import React from 'react';
import {
    Button,
    TextField
} from "@material-ui/core"


export default class AddMat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val1: '',
            val2: ''

        }
    }


    handleVal1 = (e) => {
        this.setState({
            val1: e.target.value
        })

    }

    handleVal2 = (e) => {

        this.setState({
            val2: e.target.value
        })

    }

    sum = () => {
        this.setState({
            sum: parseInt(this.state.val1) + parseInt(this.state.val2)
        })
    }

    render() {
        return (

            <div>

                Enter the first value:
                <TextField variant="outlined" label="enter the first value" margin="dense" value={this.state.val1} onChange={this.handleVal1} color="primary" />
                <br />

            Enter the second value:
                <TextField variant="outlined" label="enter the second value" margin="dense" value={this.state.val2} onChange={this.handleVal2} color="primary" />
                <br />

            The sum is: {this.state.sum}

                <Button variant="contained" color="primary" onClick={this.sum}>
                    Add
                </Button>

            </div>

        )
    }
}

import React from 'react';
import {
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Dialog,
    DialogContent,
    CircularProgress
} from '@material-ui/core'

export default class Delay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loader: false,


            root: {
                width: '100%',
                maxWidth: '36ch',
            }
        }
    }
    handleData = () => {
        this.setState({
            loader: true
        });
        fetch("https://reqres.in/api/users?delay=3")
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                var data1 = this.state.data;

                this.setState({
                    data: resJson.data,


                });

                if (resJson.data) {
                    this.setState({
                        loader: false
                    });
                }
                else {
                    this.setState({
                        loader: true
                    })
                }

            })
    }
    render() {
        return (
            <div>
                <h1>
                    Welcome to The List
                </h1>
                <div>
                    <ol>

                        {this.state.data.map((s) => {
                            return (
                                <div>
                                    <li>
                                        <List className={this.state.root}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={s.avatar} />
                                                </ListItemAvatar>
                                                <ListItemText primary={s.first_name + " " + s.last_name} secondary={s.email} />
                                            </ListItem>
                                        </List>
                                    </li>
                                </div>
                            )
                        })}
                    </ol>
                </div>

                <Button onClick={this.handleData} variant="contained" color="primary">
                    GET DATA
                </Button>
                <Dialog open={this.state.loader}>
                    <DialogContent>
                        <CircularProgress />
                    </DialogContent>
                </Dialog>


            </div>
        )
    }
}

import React from 'react';
import{ Button,
List,
ListItem,
ListItemAvatar,
ListItemText,
Avatar } from '@material-ui/core'

export default class Getlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{
                id:null,
                name:null,
                email:null,
                Avatar:null
            }],
          
            root: {
                width: '100%',
                maxWidth: '36ch',
               
              }            
      }
    }
    handleData=()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then((res)=>res.json())
        .then((resJson) => {
            console.log(resJson)
           var data1=this.state.data;
                this.setState({
                data:resJson.data
                
              
            });
        })
    }
    render(){
        return(
            <div>

                <h1>
                Welcome to The List
                </h1>
                <div>
                <ol>
                 {this.state.data.map((s)=>{
                return(
                    <div>
                    <li>
                    <List className={this.state.root}>
                    <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                            {this.state.Avatar}
                          </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={this.state.name} secondary={this.state.email} />
                    </ListItem>
                    </List>
               
              
                      {s.id}-
                      {s.first_name}_{s.last_name}<br />
                      {s.email} 
             </li>
            
             
             </div>  
                )         
                 })}
              
                </ol>
                </div>
                <Button onClick={this.handleData} variant="contained" color="primary">
                    GET DATA
                </Button>
            </div>
        )
    }
}

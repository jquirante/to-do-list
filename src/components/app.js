import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/app.css';
import List from './list';
import AddItem from './add_item';
import ViewItem from './view_item';
import { BASE_URL, API_KEY} from '../config/api';

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.getListData();
    }

    addItem = async (item) => {
        
        const response = await axios.post( BASE_URL + API_KEY, item);

        console.log('Add Item Response: ', response);
        await this.getListData();
    }

    
    async getListData() {
        // Call server to get list data

        // axios.get(BASE_URL + API_KEY).then( (response) => {
        //     console.log('Get Todos Reponse: ',response);
        // }).catch( (error)=> {
        //     console.log('Error getting list data: ', error.message);
        // });

        try {
            const response = await axios.get(BASE_URL + API_KEY);

            console.log('Get Data Response: ', response);

            this.setState({
                list: response.data.todos
            });
        } catch (error) {
            console.log('Something went wrong in getListData');
        }


    }

    deleteItem = async (id) => {
        console.log('Delete ID: ', id);
        const response = await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        console.log('Delete response', response);
        this.getListData();
    }

    toggleComplete = async(id) => {
        console.log('Toggle ID: ',id);
        try {
            const response = await axios.put(`${BASE_URL}/${id + API_KEY}`);
            console.log('Toggle Complete Response: ', response);
            
            this.getListData();
        } catch (error) {
            console.log('Toggle Catch Error: ', error);
        }
        
        

    }

    render() {

    const { list } = this.state;

        return (
            <div className="container">

                <Route exact path="/" render={(props) => {
                    return <List {...props} toggle={this.toggleComplete} delete={this.deleteItem} toDos={list}/>
                }}/>

                <Route path="/add-item" render={ (props) => {
                    return <AddItem {...props }add={this.addItem} />;
                }}/>

                <Route path="/item/:item_id" component={ViewItem} />
                
            </div>

        );
    }
}

export default App;

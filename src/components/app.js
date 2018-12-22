import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import axios from 'axios';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';
import { randomString } from '../helpers';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c1018_jquirante';

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
        this.getListData();
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
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem}/>
                <List toggle={this.toggleComplete} delete={this.deleteItem} toDos={list}/>
            </div>

        );
    }
}

export default App;

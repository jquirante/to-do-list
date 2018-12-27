import React, { Component } from 'react';
import NavButton from './nav_button';

class AddItem extends Component {

    state = {
        title: '',
        details: '',
    }

    handleSaveItem = async (e) => {
        e.preventDefault();
        
        await this.props.add(this.state);
        
        this.props.history.push('/');
    }

    reset = () => {
        this.setState({
            title: '',
            details: ''
        })
    }
    render() {
        console.log('Add Item Props: ', this.props);

        const { title, details } = this.state;
        return (
            <div>
                <h1 className="center">Add To Do Item</h1>
                <NavButton to="/" text="Back To List" color="purple"/>
                <form onSubmit={this.handleSaveItem}>
                    <div className="row">
                        <div className="input-field s8 col offset-s2">
                            <input onChange={ (e) => {this.setState({title: e.target.value})}} id="title" type="text" name="title" autoComplete="off" value={title}/>
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field s8 col offset-s2">
                            <input onChange={ (e) => {this.setState({details: e.target.value})}} id="details" type="text" name="details" autoComplete="off" value={details}/>
                            <label htmlFor="details">Details</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" s6 col center">
                            <button onClick={this.reset} type="button" className="btn red waves-effect">Cancel</button>
                        </div>
                        <div className=" s6 col center">
                            <button className="btn green waves-effect waves-light">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem;
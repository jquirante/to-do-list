import React, { Component } from 'react';

class AddItem extends Component {

    state = {
        title: '',
        details: '',
    }

    handleSaveItem = (e) => {
        e.preventDefault();
        console.log('New Item: ', this.state);
        this.props.add(this.state);
    }

    render() {
        const { title, details } = this.state;
        return (
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
                        <button type="button" className="btn red waves-effect">Cancel</button>
                    </div>
                    <div className=" s6 col center">
                        <button className="btn green waves-effect waves-light">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddItem;
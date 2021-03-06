import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return(
        <li className="collection-item row">
            <div className="col s1">
                <i onClick={props.toggle} className="material-icons">{props.complete ? 'check_box' : 'check_box_outline_blank'}</i>
            </div>
            <div  className="col s9">
                <Link to={`/item/${props.itemId}`}>{props.title}</Link>
            </div>
            <div className="col s2 center">
                <button onClick={props.delete} className="btn btn-floating red darken-2"> <i className="material-icons">delete</i> </button>
            </div>
            
        </li>
    )
}
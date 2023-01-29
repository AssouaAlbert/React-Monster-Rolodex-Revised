import * as React from 'react';
import { Component } from 'react';
import "./card-container.css"

class Card extends Component {

    render(): React.ReactNode {
        const {id,name,email}  = this.props;
        return (<div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt={`Monster ${name}`} className="card-container" />
        <h2 className="">{name}</h2>
        <p className="">{email}</p>
    </div>)
    }
}
export default Card;
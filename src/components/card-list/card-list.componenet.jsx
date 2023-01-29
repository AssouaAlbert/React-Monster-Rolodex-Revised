import * as React from 'react';
import { Component } from 'react';
import Card from "../card/card";
import "./card-list.component.css"


class CardList extends Component {
    render() {
        let { monsters } = this.props;
        return (<div className="card-list">
            {monsters.map((monster) => {
                let { id, name, email } = monster;
                return <Card id={id} name={name} email={email} />
            })}
        </div>)
    }
}

export default CardList;
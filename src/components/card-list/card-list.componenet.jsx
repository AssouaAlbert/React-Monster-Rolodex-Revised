import * as React from 'react';
import Card from "../card/card";
import "./card-list.component.css"

// const CardList = ({ monsters }) => {
//!! Or 

const CardList = (props) => {
        let { monsters } = props;
        return (<div className="card-list">
            {monsters.map((monster) => {
                let { id, name, email } = monster;
                return <Card id={id} name={name} email={email} key={id}/>
            })}
        </div>)
    }
export default CardList;
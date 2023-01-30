import "./card-container.css"

const Card = (props) => {
        const {id,name,email}  = props;
        return (<div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2`} alt={`Monster ${name}`} className="card-container" />
        <h2 className="">{name}</h2>
        <p className="">{email}</p>
    </div>)
    }
export default Card;
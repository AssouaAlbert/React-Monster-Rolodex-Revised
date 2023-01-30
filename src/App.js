import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.componenet";
import SearchBox from "./components/search-box/searchbox.componenet.jsx"

const App = () => {

  // useState takes the intial value (searchTerm): "",
  //* Returns and array [value,handleChange].
  ///* HandleChange is the function  to call to change the state.
  /***********************************************/

  const [searchTerm, handleChange] = useState("");
  const [monsters, setMonsters] = useState([]);
  //Any state change of this component will course a re-render, to prevent this use another state to hold the value of monsters
  const [filteredMonsters, setFilterMonters] = useState(monsters);

  // useEffect takes two arguements with the second being optional,
  //* The first is a call back function which returns undefined or returns a function which used for cleanups and prevent memory leaks
  //* The second is an array of values, in this case it's state values, it compairs the current and previous values, if different, it re-renders.
  //! Note: If the state of monsters constantly change (if handle change is used out of useEffect function) because Javascript uses
  //! references and not actual values for objects, so the state will 
  /***********************************************/

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
      .then((data) => {
        setMonsters(data);
      });
  }, [])
  useEffect(() => {
    const searchMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm));
    setFilterMonters(searchMonster);
  }, [monsters, searchTerm])

  const onSearchChange = (e) => {
    e.preventDefault();
    const searchField = e.target.value.toLowerCase();
    handleChange(searchField);
  }

  return (<div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    <SearchBox onSearchChange={onSearchChange} />
    <CardList monsters={filteredMonsters} key={"card-list"} />
  </div>)
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // name: "Albert",
//       monsters: [],
//       searchTerm: "",
//     }
//   }
//   componentWillMount(): void {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
//       .then((data) => {
//         this.setState(() => {
//           return { monsters: data }
//         })
//       });
//   }
//   handleChange= (e) => {
//     this.setState(() => {
//       return { searchTerm: e.target.value.toLowerCase() };
//     }, () => { });
//   }
//   onSearchChange= (e) => {
//     e.preventDefault();
//     this.handleChange(e);
//   }
//   render() {
//     let { monsters, searchTerm } = this.state;
//     let { onSearchChange } = this;
//     let searchMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm));
//     return (<div className="App">
//       <SearchBox onSearchChange={onSearchChange} />
//       <CardList monsters={searchMonster} />
//     </div>)
//   }
// }

export default App;

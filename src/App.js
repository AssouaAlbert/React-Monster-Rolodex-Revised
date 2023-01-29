import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.componenet";
import SearchBox from "./components/search-box/searchbox.componenet.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "Albert",
      monsters: [],
      searchTerm: "",
    }
  }
  componentWillMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return { monsters: data }
        })
      });
  }
  handleChange= (e) => {
    this.setState(() => {
      return { searchTerm: e.target.value.toLowerCase() };
    }, () => { });
  }
  onSearchChange= (e) => {
    e.preventDefault();
    this.handleChange(e);
  }
  render() {
    let { monsters, searchTerm } = this.state;
    let { onSearchChange } = this;
    let searchMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm));
    return (<div className="App">
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={searchMonster} />
    </div>)
  }
}

export default App;

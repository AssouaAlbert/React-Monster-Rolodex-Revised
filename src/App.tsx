import React, { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.componenet";
import SearchBox from "./components/search-box/searchbox.componenet.js";

import { getData } from './utils/fetch.utils';

type Monster = {
  id: string;
  name: string;
  email: string;
}

type onSearchChangeEventHandle = (e: ChangeEvent<HTMLInputElement>) => void;

const App = () => {

  const [searchTerm, handleChange] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonters] = useState(monsters);


  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
    //   .then((data) => {
    //     setMonsters(data);
    //   });
    const fetchUsers = async () => {
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
    }
    fetchUsers();
  }, [])
  useEffect(() => {
    const searchMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm));
    setFilterMonters(searchMonster);
  }, [monsters, searchTerm])

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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


export default App;

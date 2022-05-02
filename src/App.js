import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App =()=> {
  const [searchField , setSearchField] = useState('')
  const [monsters ,setMonsters]=useState([])
  const [searchString , setSearchString] = useState('') 
  const [filterMonsters,setFilteredMoonsters]=useState(monsters) 

 useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((Response) => Response.json())
     .then((users) => {
       setMonsters(users)
     })
 },[])
  

 useEffect(()=>{
    const newFilteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMoonsters(newFilteredMonster)
 },[monsters,searchField])
  
  
  const  onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  
  const onChange =(event) =>{
    setSearchString(event.target.value)
  }
  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler = {onSearchChange} placeholder='search monsters' classname='search-box-monster'/>
      <SearchBox onChangeHandler = {onChange} placeholder='search ' classname='search-box-monster'/>
        <CardList monsters={filterMonsters} />
    </div>
  );
  
}

export default App;

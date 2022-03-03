import React, {useState, useEffect} from "react";
import "./styles/app.scss";
import {CardList, SearchBox} from "./components"
import { Route, Routes } from 'react-router-dom';
import UserMap from "./pages/user-map/UserMap";

function App() {

  const [people, setPeople] = useState([]);
  const [searchField, setSearchField] = useState("");

  //fetching the data
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      
      return response.json();

    }).then(users => {

      setPeople(users);
    
    })
      
  },[]);

 
  //USERS
  const filteredUsers = people.filter(person => {

    return person.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  //SEARCH FEATURE: UNCOMMENT SEARCH BOX COMPONENT TO VISUALIZE
  const onSearchChange = (e) => {

    setSearchField(e.target.value);

  }
  
 
  if (people.length === 0) {

    return <h1 style={{textAlign: 'center'}}>Loading...</h1>
    
   } else {

  return (

    <div className="app">
   
        {/* <SearchBox searchChange={onSearchChange} search={searchField} />  */}
       
        <Routes>
            <Route   path="/" element={<CardList  people={filteredUsers}/> }/> 
            <Route exact  path="/user-map/:id/:name/:street/:lat/:long" element={<UserMap people={filteredUsers} />}/>
        </Routes>
        
    </div>
  );

   }
}

export default App;




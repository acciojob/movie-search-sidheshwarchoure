
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {

let [search,setSearch] = useState("");
let[movies,setMovies]=useState([])

function handleSearch(event){
  event.preventDefault()
  axios.get("http://www.omdbapi.com",{
    params:{
      apikey:"48cbef3e",
      s:search
    }
  })
  .then(response=>{
   setMovies(response.data.Search)
   setSearch("")
  })
  .catch(err=>console.log(err))
}

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Search Movie</h2>
        <form>
          <input type="text" placeholder="Enter Movie Name"
          onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
          <button type="submit" onClick={handleSearch}>Search</button>
        </form>

        <ul>
        {
        movies!==undefined ? (
        movies.map((movie)=>(
              <li>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title}/>
              </li>
        ))) : (<p className="error"> Invalid movie name. Please try again.</p>)
        }
      </ul>
    </div>
      )
      }
export default App;

import React, {useState} from 'react'
import Axios from 'axios'
import Recipe from './Recipe'
import {v4 as uuidv4} from 'uuid'


function Recipes() {
    const [query, setQuery] = useState("")
    // searching recipes
    const [recipes, setRecipes] = useState([])
    const APP_ID = "62048cf9"
    const APP_KEY = "1ba7e12cc8fac389fca582590e77d51b"
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const getData = async() => {
     const result = await Axios.get(url);
     setRecipes(result.data.hits)
     console.log(result)
     setQuery("")
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getData()
    }


  return (
    <div>
        <h1>Look for Recipe</h1>
         <form className="d-flex" onSubmit={onSubmit}>
        <input className="form-control me-2" type="text" placeholder="Search for recipe" aria-label="Search" onChange={onChange} value={query}/>
        <button className="btn btn-outline-success" type="submit">Search</button> 
      </form>
      <div>
      {recipes!== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)}
      </div>
    </div>
  )
}


export default Recipes
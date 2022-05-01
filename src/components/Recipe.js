import React from 'react'
import RecipeDetail from './RecipeDetail'
import { Container} from 'react-bootstrap'

function Recipe({recipe}) {
  const {label, image, url, ingredients} = recipe.recipe
  return (
    <container className="container-fluid">
    <div className='card'>
        <h2>{label}</h2>
        <img className="card-img-top" height="300px" width="100px" src={image} alt={label}/>
        <div class="card-body">
        <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">URL</a>
        <button>Ingredients</button>
        <RecipeDetail ingredients={ingredients}/>    
        </div> 
    </div>
    </container>
  )
}

export default Recipe
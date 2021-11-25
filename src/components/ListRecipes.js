import React, {useContext} from 'react'
import { RecipesContext } from '../context/RecipesContext'
import Recipe from './Recipe';
export default function ListRecipes() {

    // extract recipes
    const {recipes} = useContext(RecipesContext)
    console.log(recipes);

    return (
        <div className='row mt-5'>
            {recipes.map(r => (
                <Recipe 
                    key={r.idDrink}
                    recipe={r}
                />
            ))}
        </div>
    )
}

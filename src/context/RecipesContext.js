import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
    const [recipes, saveRecipes] = useState([])
    const [search, searchRecipes] = useState({
        name: '',
        category: ''
    })

    const [consult, saveConsult] = useState(false)

    const { name, category } = search

    useEffect(() => {
        if (consult) {
            const obtainRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const res = await axios.get(url)
                // console.log(res.data.drinks);
                saveRecipes(res.data.drinks)

            }
            obtainRecipes()
        }

    }, [search])

    return (
        <RecipesContext.Provider value={{ recipes, searchRecipes, saveConsult }}>
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;

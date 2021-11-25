import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

// Create context
export const CategoriesContext = createContext();

// Create provider, is where we find functions and the state
const CategoriesProvider = (props) => {
    // Create state context
    const [categories, saveCategories] = useState([])

    // execute the api call
    useEffect(() => {
        const obtainCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const categories = await axios.get(url)

            saveCategories(categories.data.drinks);
        }
        obtainCategories()
    }, [])

    return (
        <CategoriesContext.Provider value={{
            categories
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider
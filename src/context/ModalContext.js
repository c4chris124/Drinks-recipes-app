import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const ModalContext = createContext();

export default function ModalProvider(props) {

    // provider state
    const [idrecipe, saveIdrecipe] = useState(null)
    const [information, saveRecipe] = useState({})

    // once we have one recipe, call api
    useEffect(() => {
        const obtainRecipe = async () => {
            if (!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`
            const res = await axios.get(url)
            saveRecipe(res.data.drinks[0]);
        }
        obtainRecipe()
    },[idrecipe])

    return (
        <ModalContext.Provider value={{information, saveIdrecipe, saveRecipe}}>
            {props.children}
        </ModalContext.Provider>
    )
}

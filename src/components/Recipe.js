import React, {useContext, useState} from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));



export default function Recipe({recipe}) {
    // config of material-ui modal
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    // extract context values
    const{information, saveIdrecipe, saveRecipe} = useContext(ModalContext)
    // console.log(information);

    // Show and format ingredients
    const showIngredients = (information) => {
        let ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (information[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{information[`strIngredient${i}`]} {information[`strMeasure${i}`] }</li>
                )
            }
        }
        return ingredients
    }

    return (
        <div className='col-md-4 mb-3'>
            <div className="card" style={{width: '19rem'}}>
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className='card-img-top' src={recipe.strDrinkThumb} alt={`Of ${recipe.strDrink}`}/>
                <div className="card-body">
                    <button 
                        type='button' 
                        className="btn btn-block btn-dark" 
                        onClick={() => {
                            saveIdrecipe(recipe.idDrink); 
                            handleOpen();
                            }}>
                                Watch recipe
                    </button>
                    <Modal 
                        open={open} 
                        onClose={() => {
                            saveIdrecipe(null);
                            saveRecipe({})
                            handleClose()
                            }} >
                        <div className={classes.paper} style={modalStyle}>
                            <h2>{information.strDrink}</h2>
                            <h3 className='mt-4'>Instructions</h3>
                            <p>{information.strInstructions}</p>
                            <img className='img-fluid my-4' src={information.strDrinkThumb} alt="" />
                            <h3>Ingredients and quantities</h3>
                            <ul>
                                {showIngredients(information)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

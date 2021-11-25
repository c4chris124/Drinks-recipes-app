import React from 'react'
import Header from './components/Header';
import Form from './components/Form';
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ListRecipes from './components/ListRecipes';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <ListRecipes />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
// 179
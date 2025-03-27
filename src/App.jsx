import { useState } from "react";

import AddIngredient from "./components/AddIngredient"
import Header from "./components/Header"
import ListIngredients from "./components/ListIngredients";
import GetRecipe from "./components/GetRecipe";
import ListRecipe from "./components/ListRecipe";

function App() {
  const [ingredients, setIngredients] = useState( [] );
  const [isRecipeShown, setIsRecipeShown] = useState( false );
  const hasIngredient = ingredients.length > 0;

  
  const props = {
    allIngredients: ingredients,
    hasIngredient: hasIngredient,
    setIngredients: setIngredients,
    setIsRecipeShown: setIsRecipeShown,
  }

  return (
    <>
      <Header />
      <main>
        <AddIngredient
          {...props}
        />
        <ListIngredients
          {...props}
        />
        <GetRecipe 
          {...props}
        />
        <ListRecipe
          isRecipeShown={isRecipeShown}
        />
      </main>
    </>
  )
}

export default App

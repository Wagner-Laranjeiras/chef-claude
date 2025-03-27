import { useState } from "react";

import Header from "./components/Header"
import AddIngredient from "./components/AddIngredient"
import ListIngredients from "./components/ListIngredients";
import GetRecipe from "./components/GetRecipe";
import ListRecipe from "./components/ListRecipe";

function App() {
  const [ingredients, setIngredients] = useState( [] );
  const [isRecipeShown, setIsRecipeShown] = useState( false );
  const hasIngredient = ingredients.length > 0;
  const minimalIngredientNumber = 4;

  return (
    <>
      <Header />
      <main>
        <AddIngredient
          hasIngredient={hasIngredient}
          setIngredients={setIngredients}
        />
        {
          hasIngredient ? <ListIngredients allIngredients={ingredients} /> : null
        }
        {
          ingredients.length > minimalIngredientNumber ? <GetRecipe setIsRecipeShown={setIsRecipeShown} /> : null
        }
        {
          isRecipeShown ? <ListRecipe /> : null
        }
      </main>
    </>
  )
}

export default App

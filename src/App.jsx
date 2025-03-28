import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header"
import AddIngredient from "./components/AddIngredient"
import ListIngredients from "./components/ListIngredients";
import GetRecipe from "./components/GetRecipe";
import ListRecipe from "./components/ListRecipe";

function App() {
  const [ingredients, setIngredients] = useState( ['Beef', 'Tomatoes', 'Potatoes', 'Sauce', 'Cheese'] );
  const [recipe, setRecipe] = useState('');
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
          hasIngredient ? <ListIngredients  allIngredients={ingredients} /> : null
        }
        {
          ingredients.length > minimalIngredientNumber ? <GetRecipe 
                                                            allIngredients={ingredients} 
                                                            setRecipe={setRecipe}
                                                          /> : null
        }
        {
          recipe ? <ListRecipe recipe={recipe}  /> : null
        }
        <div>
        </div>
      </main>
    </>
  )
}

export default App

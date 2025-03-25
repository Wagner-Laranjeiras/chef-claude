import { useState } from "react";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( [] )
    const minimalIngredientNumber = 4;
    const hasIngredient = ingredients.length > 0;
    const ingredientsListItems = ingredients.map( (ingredient) => {
        return <li key={ingredient} className="mb-4">{ ingredient }</li>
    })

    function handleSubmit(formData) {
        const newIngredient = formData.get('ingredient');

        setIngredients((prevIngredients) =>
            [
                newIngredient,
                ...prevIngredients
            ]       
        )
    }

    function removeIngredient(e) {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        const ingredientToRemove = formData.get('ingredient');

        setIngredients((prevIngredients) => 
            prevIngredients.filter(ingredient => ingredient !== ingredientToRemove)
        )
    }



    return (
        <>
            <form action={handleSubmit} className="flex justify-center items-center m-10">
                <input
                    aria-label="Add ingredient"
                    type="text"
                    name="ingredient"
                    placeholder="e.g. Tomato"
                    className="w-3/5 max-w-5xl border-2 p-1 m-1 border-blue-900 rounded-lg shadow-sm" 
                />
                <button 
                    className="py-2 px-8 m-1 border-2 bg-blue-900 text-white rounded-lg text-sm"
                    type="submit"
                >+ Add Ingredient</button>
                <button 
                    className="py-2 px-8 m-1 border-2 bg-red-400 text-white rounded-lg text-sm"
                    onClick={removeIngredient}
                >- Remove Ingredient</button>
            </form>
            { hasIngredient ? <p className="mx-10 text-3xl font-bold">Ingredients on hand</p> : null }
            <ul className="flex flex-col mx-16 my-6 list-disc text-gray-600 font-semibold tracking-wide">
                { ingredientsListItems }
            </ul>
            { ingredients.length > minimalIngredientNumber ? (
                <div className="flex justify-around items-center max-w-3xl mx-auto bg-blue-100 rounded-lg p-8">
                    <div className="flex flex-col gap-4">
                        <span className="font-semibold text-xl">Ready for a recipe?</span>
                        <span className="text-gray-600">Generate a recipe from your list of ingredients</span>
                    </div>    
                    <button className="text-xl text-white font-medium rounded-lg bg-orange-400 px-6 py-2">Get a recipe</button>
                </div>
            ) : null }

        </>
        
     );
}
 
export default AddIngredient;
import { useState } from "react";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( ['Chicken', 'Oregano', 'Tomatoes'] )
    const ingredientsListItems = ingredients.map( (ingredient) => {
        return <li>{ ingredient }</li>
    })

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get('ingredient');

        setIngredients((prevIngredients) =>
            [
                newIngredient,
                ...prevIngredients
            ]       
        )
    }

    function removeIngredient(e) {
        console.log('remove')
        setIngredients((prevIngredients) =>
            [
                
            ]
        )
    }



    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center items-center m-10">
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
                    name="ingredientToRemove"
                    onClick={removeIngredient}
                >- Remove Ingredient</button>
            </form>
            <ul className="flex flex-col justify-center items-center m-10 bg-amber-200">
                { ingredientsListItems }
            </ul>
        
        
        </>
        
     );
}
 
export default AddIngredient;
import { useState } from "react";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( ['Chicken', 'Oregano', 'Tomatoes'] )
    const ingredientsListItems = ingredients.map( (ingredient) => {
        return <li>{ ingredient }</li>
    })

    function handleSubmit(e) {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
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

    ///////////////////////////////////////////////////////////////////////////////////////////////

    const [count, setCount ] = useState(0);

    function handleAdd() {
        console.log("Subtracted.")
        setCount((prevCount) => prevCount + 1);
    }

    function handleSubtract() {
        console.log("Added.")
        setCount((prevCount) => prevCount - 1);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

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
                    onClick={removeIngredient}
                >- Remove Ingredient</button>
            </form>
            <ul className="flex flex-col m-10 bg-amber-200">
                { ingredientsListItems }
            </ul>

            <div className="bg-black p-4 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-bold mb-3">Count</h1>
                <div className="flex gap-2 items-center justify-center">
                    <button 
                        onClick={handleSubtract}
                        className="rounded-full text-white bg-gray-600 w-16 h-16"
                        aria-label="Decrease count"
                    >-</button>
                    <h2 className="flex justify-center text-4xl rounded-full font-semibold content-center items-center bg-white w-26 h-26">{count}</h2>
                    <button 
                        onClick={handleAdd} 
                        className="rounded-full bg-gray-600 text-white w-16 h-16"
                        aria-label="Increase count"
                    >+</button>
                </div>
            </div>
        
        
        </>
        
     );
}
 
export default AddIngredient;
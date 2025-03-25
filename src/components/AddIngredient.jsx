import { useState } from "react";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( [] );
    
    function handleSubmit(formData) {
        const newIngredient = formData.get('ingredient');

        setIngredients((prevIngredients) =>
            [
                newIngredient,
                ...prevIngredients
            ]       
        )
    }

    // function removeIngredient(e) {
    //     const formData = new FormData(e.currentTarget);
    //     e.preventDefault();
    //     const ingredientToRemove = formData.get('ingredient');
    //     console.log('remove ingredient');
    //     console.log('ingredient: ', ingredientToRemove)
    //     setIngredients((prevIngredients) => 
    //         prevIngredients.filter(ingredient => ingredient !== ingredientToRemove)
    //     )
    // }

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
                { hasIngredient ? (
                    <button 
                        className="py-2 px-8 m-1 border-2 bg-red-400 text-white rounded-lg text-sm"
                        onClick={removeIngredient}
                        type="button"
                    >- Remove Ingredient</button>
                ) : null }
            </form>
        </>
        
     );
}
 
export default AddIngredient;
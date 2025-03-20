const AddIngredient = (props) => {
    return ( 
        <form className="flex justify-center items-center m-10">
            <input
                aria-label="Add ingredient"
                type="text"
                placeholder="e.g. Tomato"
                className="w-3/5 max-w-5xl border-2 p-1 m-1 border-blue-900 rounded-lg shadow-sm" 
            />
            <button className="py-2 px-8 m-1 border-2 bg-blue-900 text-white rounded-lg text-sm">+ Add Ingredient</button>
        </form>
     );
}
 
export default AddIngredient;
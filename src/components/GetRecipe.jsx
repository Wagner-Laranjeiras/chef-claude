const GetRecipe = ({ setIsRecipeShown }) => {
    const showRecipe = () => (
        setIsRecipeShown((prevStatus) => !prevStatus)
      )

    return ( 
        <div className="flex justify-around items-center max-w-4xl mx-auto bg-blue-100 rounded-lg p-8">
            <div className="flex flex-col gap-4">
                <span className="font-semibold text-xl">Ready for a recipe?</span>
                <span className="text-gray-600">Generate a recipe from your list of ingredients</span>
            </div>    
            <button 
                className="text-xl text-white font-medium rounded-lg bg-orange-400 px-6 py-2"
                onClick={showRecipe}
            >Get a recipe</button>
        </div>
     );
}
 
export default GetRecipe;
import { useEffect, useState } from "react";
import { getRecipeFromMistral } from "../ai";
import { FaSpinner } from "react-icons/fa"

const GetRecipe = ({ allIngredients, setRecipe }) => {
    const [isRecipeLoading, setIsRecipeLoading] = useState(false);
    const [shouldFetchRecipe, setShouldFetchRecipe] = useState(false)

    useEffect(() => {
        if(!shouldFetchRecipe) return;
        const fetchRecipe = async () => {
            try {
                const recipeRecommendation = await getRecipeFromMistral(allIngredients);
                setRecipe(recipeRecommendation);
            } catch (error) {
                console.error(error);
            } finally {
                setIsRecipeLoading(false);
                setShouldFetchRecipe(false);
            }
        }

        fetchRecipe();
    }, [shouldFetchRecipe])
    
    const showRecipe = function() {
        console.log('Get a recipe clicked');   
        setIsRecipeLoading(true);
        setShouldFetchRecipe(true);
    }

    return ( 
        <div className="flex justify-around items-center max-w-4xl mx-auto bg-blue-100 rounded-lg p-8">
            <div className="flex flex-col gap-4">
                <span className="font-semibold text-xl">Ready for a recipe?</span>
                <span className="text-gray-600">Generate a recipe from your list of ingredients</span>
            </div>    
            <button 
                className="text-xl text-white font-medium rounded-lg bg-orange-400 px-6 py-2 cursor-pointer"
                onClick={showRecipe}
                disabled={isRecipeLoading}
            >{ isRecipeLoading ? <FaSpinner className="animate-spin"/> : 'Get a recipe' }</button>
        </div>
     );
}
 
export default GetRecipe;
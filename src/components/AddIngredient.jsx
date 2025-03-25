import { useState } from "react";
import Count from "./Count";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( [] )
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
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const [isGoingOut, setIsGoingOut] = useState(false);
    let isGoingOutAnswer = isGoingOut ? "Yes" : "Nop";

    function handleGoingOut() {
        setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const favoriteThingsSong = [
        "Raindrops on roses",
        "Whiskers on kittens",
        "Bright copper kettles",
        "Warm woolen mittens",
        "Brown paper packages tied up with strings",
        "Cream-colored ponies",
        "Crisp apple strudels",
        "Doorbells",
        "Sleigh bells",
        "Schnitzel with noodles",
        "Wild geese that fly with the moon on their wings",
        "Girls in white dresses with blue satin sashes",
        "Snowflakes that stay on my nose and eyelashes",
        "Silver-white winters that melt into springs",
    ]

    const [myFavoriteThings, setMyFavoriteThing] = useState([]);

    function addFavoriteThing() {
        setMyFavoriteThing(
            (prevFavoriteThing) => {
                return [
                    ...prevFavoriteThing,
                    favoriteThingsSong[prevFavoriteThing.length]
                ]
                
            }
        )
    }

    const favoriteThing = myFavoriteThings.map((item) =>
        <li key={item}>{item}</li>
    )



    const [count, setCount ] = useState(0);

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
            <ul className="flex flex-col m-10 bg-amber-200 list-disc">
                { ingredientsListItems }
            </ul>

            <div className="bg-black p-4 flex flex-col items-center justify-center">
                
                <Count count={count} setCount={setCount}/>
                
                <h1 className="mt-12 text-white text-4xl font-bold mb-3">Do I feel like going out tonight?</h1>
                <button
                    className="flex justify-center text-4xl rounded-full font-semibold content-center items-center bg-white w-26 h-26"
                    onClick={handleGoingOut}
                    aria-label={`The current answer is ${isGoingOutAnswer}`}
                >{isGoingOutAnswer}</button>

                <h1 className="mt-12 text-white text-4xl font-bold mb-3">My Favorite things</h1>
                <button
                    className="flex justify-center text-xl rounded-xl font-semibold content-center items-center bg-white p-6"
                    onClick={addFavoriteThing}
                >Add favorite thing</button>
                <section
                    aria-live="polite"
                >
                    <ul 
                        className="text-white text-xl m-4 funt-semibold list-disc w-full"
                    >
                      {favoriteThing}  
                    </ul>
                </section>
            </div>
        
        
        </>
        
     );
}
 
export default AddIngredient;
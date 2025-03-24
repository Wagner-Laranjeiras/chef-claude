import { useState } from "react";

const AddIngredient = (props) => {
    const [ingredients, setIngredients] = useState( [] )
    const ingredientsListItems = ingredients.map( (ingredient) => {
        return <li key={ingredient}>{ ingredient }</li>
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
    ///////////////////////////////////////////////////////////////////////////////////
    function handleForm(formData) {
        const email = formData.get('username');
        const status = formData.get('employmentStatus');
        const dietaryRestrictions = formData.getAll('dietaryRestrictions');
        const favColor = formData.get('favColor');
        console.log(favColor)
        console.log(dietaryRestrictions);
        console.log(status);
        console.log(email);

    }
    ///////////////////////////////////////////////////////////////////////////////////



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
            <ul className="flex flex-col m-10 bg-amber-200 list-disc">
                { ingredientsListItems }
            </ul>

            <section>
                <h1>SignUp Form</h1>
                <form action={handleForm} className="flex flex-col gap-2 bg-black text-white p-8">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className="border-2 border-white" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="border-2 border-white"/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" className="border-2 border-white">This is a description</textarea>

                    <fieldset className="flex flex-col">
                        <legend>Employment Status</legend>
                        
                        <label htmlFor="unemployed">
                            <input className="border border-2 border-white" type="radio" name="employmentStatus" id="unemployed" value="unemployed" defaultChecked={true}/>    
                        Unemployed</label>
                        
                        
                        <label htmlFor="partTime">
                            <input className="border border-2 border-white" type="radio" name="employmentStatus" id="partTime" value="partTime"/>    
                        Part-time</label>
                        
                        
                        <label htmlFor="fullTime">
                            <input className="border border-2 border-white" type="radio" name="employmentStatus" id="fullTime" value="fullTime" />    
                        Full-time</label>
                    </fieldset>

                    <fieldset className="flex flex-col">
                        <legend>Dietary Restriction</legend>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                            Kosher
                        </label>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                            Vegan
                        </label>
                        <label>
                            <input type="checkbox" name="dietaryRestrictions" value="veggie"/>
                            Veggie
                        </label>
                    </fieldset>

                    <label htmlFor="favColor">What's your favorite color?</label>
                    <select required name="favColor" id="favColor" className="border-2 border-white">
                        <option value="" disabled>-- Choose a color --</option>
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Blue">Blue</option>
                        <option value="Lila">Lila</option>
                        <option value="Indigo">Indigo</option>
                    </select>

                    <button className="border-2 border-white">Submit</button>

                </form>
            </section>
        </>
        
     );
}
 
export default AddIngredient;
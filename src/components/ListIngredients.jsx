import { v4 as uuidv4 } from "uuid";

const ListIngredients = ({ allIngredients }) => {
    const ingredientsListItems = allIngredients.map( (ingredient) => {
        return <li key={uuidv4()} id={uuidv4()} className="mb-4">{ ingredient }</li>
    })

    console.log('ingredientsListItems ', ingredientsListItems);

    return ( 
        <section>
            <h2 className="mx-10 text-3xl font-bold">Ingredients on hand</h2>
            <ul className="flex flex-col mx-16 my-6 list-disc text-gray-600 font-semibold tracking-wide">
                { ingredientsListItems }
            </ul>
        </section>
     );
}
 
export default ListIngredients;
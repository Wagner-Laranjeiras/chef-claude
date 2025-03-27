const ListIngredients = ({allIngredients, hasIngredient }) => {
    const ingredientsListItems = allIngredients.map( (ingredient) => {
        return <li key={ingredient} className="mb-4">{ ingredient }</li>
    })

    return ( 
        <section>
            { hasIngredient ? <h2 className="mx-10 text-3xl font-bold">Ingredients on hand</h2> : null }

            <ul className="flex flex-col mx-16 my-6 list-disc text-gray-600 font-semibold tracking-wide">
                { ingredientsListItems }
            </ul>
        </section>
     );
}
 
export default ListIngredients;
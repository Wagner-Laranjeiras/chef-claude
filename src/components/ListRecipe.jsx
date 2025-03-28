import Markdown from 'react-markdown'

const ListRecipe = ({ recipe }) => {
    return ( 
        <section className="m-12 text-gray-600 " aria-live="polite">
            <h2 className="text-3xl font-bold mb-8">Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container font-semibold tracking-wide leading-8">
               <Markdown>{ recipe }</Markdown>
            </article>
        </section>
     );
}
 
export default ListRecipe;
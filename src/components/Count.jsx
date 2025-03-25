const Count = (props) => {

    function handleAdd() {
            console.log("Subtracted.")
            props.setCount((prevCount) => prevCount + 1);
        }
    
        function handleSubtract() {
            console.log("Added.")
            props.setCount((prevCount) => prevCount - 1);
    }

    return (
        <section>
            <h1 className="text-white text-4xl font-bold mb-3">Count</h1>
            <div className="flex items-end justify-center">
                <button 
                    onClick={handleSubtract}
                    className="z-10 rounded-full text-white bg-gray-400 w-16 h-16 text-3xl font-semibold"
                    aria-label="Decrease count"
                >-</button>
                <h2 
                    className="mx-[-16px] flex justify-center text-4xl rounded-full font-semibold content-center items-center bg-white w-26 h-26">
                {props.count}</h2>
                <button 
                    onClick={handleAdd} 
                    className="z-10 rounded-full bg-gray-400 text-white w-16 h-16 text-3xl font-semibold"
                    aria-label="Increase count"
                >+</button>
            </div>
        </section>

     );
}
 
export default Count;
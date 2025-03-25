import { useState } from "react"
import AddIngredient from "./components/AddIngredient"
import Header from "./components/Header"
import pads from "./pads"

function App() {
  const [padsArr, setPads] = useState(pads);
  const padStyles = {
    backgroundColor: padsArr.on ? padsArr.color : '#808080'
  }

  
  const allPads = padsArr.map(
    (pad) => <button 
                className="m-2 max-w-2xs border border-amber-700 p-4 rounded-md"
                key={pad.id}
                style={padStyles}
              >{pad.color}</button>
  )

  toggleOn() {
    setPads(
      (prevPad) => !prevPad.on
    );
  }

  return (
    <>
      <Header />
      <main>
        <AddIngredient />

        <section>
          <div>
            { allPads }
          </div>
        </section>
      </main>
    </>
  )
}

export default App

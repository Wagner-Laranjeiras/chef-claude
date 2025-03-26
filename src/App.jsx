import { useState } from "react"
import AddIngredient from "./components/AddIngredient"
import Header from "./components/Header"
import pads from "./pads"
import Pad from "./components/Pad";

function App() {
  const [padsArr, setPadsArr] = useState(pads);


  function toggleOnOff(id) {
      setPadsArr(
        (prevPads) => prevPads.map(
          (prevPadItem) => (
            prevPadItem.id === id ? { ...prevPadItem, on: !prevPadItem.on } : prevPadItem
          )
        )
      )
      padsArr.map((pad) => pad.id === id ? console.log('Is On: ', pad.on) : null)
  }

  function turnOff() {
    setPadsArr(
      (prevPads) => prevPads.map(
        (prevPadItem) => (
          { ...prevPadItem, on: false }
        )
      )
    )
  }

  function turnOn() {
    setPadsArr(
      (prevPads) => prevPads.map(
        (prevPadItem) => (
          { ...prevPadItem, on: true }
        )
      )
    )

  }
  
  const allPads = padsArr.map(
    (pad) => <Pad
                key={pad.id}
                id={pad.id}
                color={pad.color}
                isOn={pad.on}
                toggleOnOff={toggleOnOff}
              />
  )

  return (
    <>
      <Header />
      <main>
        <AddIngredient />

        <section>
          <div>
            { allPads }
            <button className="border rounded-md p-4 bg-amber-200 mx-1" onClick={turnOff}>Turn all Off</button>
            <button className="border rounded-md p-4 bg-amber-200 mx-1" onClick={turnOn}>Turn all On</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

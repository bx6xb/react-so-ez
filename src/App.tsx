import React, { useState } from "react"
import "./App.css"
import Accordion from "./components/Accordion/Accordion"
import UncontrolledaAcordion from "./components/UncontrolledaAcordion/UncontrolledaAcordion"
import Rating, { RatingValueType } from "./components/Rating/Rating"
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating "
import { OnOff } from "./components/OnOff/OnOff"
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff"

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  let [on, setOn] = useState(false)

  return (
    <div className="App">
      <br />
      <b>Контролируемый аккордион</b>
      <Accordion
        titleValue="Menu"
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed)
        }}
      />
      <br />
      <br />
      <b>Не контролируемый аккордион</b>
      <UncontrolledaAcordion titleValue="Menu" />
      <br />
      <br />
      <b>Контролируемый рейтинг</b>
      <Rating value={ratingValue} onClick={setRatingValue} />
      <br />
      <br />
      <b>Не контролируемый рейтинг</b>
      <UncontrolledRating />
      <br />
      <br />
      <b>Контролируемый on/off</b>
      <OnOff on={on} setOn={setOn} />
      <br />
      <br />
      <b>Не контролируемый on/off</b>
      <UncontrolledOnOff />
      <br />
      <br />
    </div>
  )
}

export default App

import { useReducer, useState } from "react"
import { reducer } from "./reducer"

export type AccordionPropsType = {
  titleValue: string
}

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
  // let [collapsed, setCollapsed] = useState(false)
  let [state, dispatch] = useReducer(reducer, { collapsed: false })

  console.log("UncontrolledAccordion rendering")

  const onClickHandler = () => dispatch({ type: "TOGGLE-COLLAPSED" })

  return (
    <div>
      <AccordionTitle title={titleValue} onClick={onClickHandler} />
      {!state.collapsed && <AccordionBody />}
    </div>
  )
}

export type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle({ title, onClick }: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering")

  return (
    <div>
      <h3
        onClick={() => {
          onClick()
        }}
      >
        {title}
      </h3>
    </div>
  )
}

function AccordionBody() {
  console.log("AccordionBody rendering")

  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

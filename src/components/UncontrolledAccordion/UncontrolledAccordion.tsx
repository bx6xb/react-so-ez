import { useState } from "react"

export type AccordionPropsType = {
  titleValue: string
}

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(false)

  const onClickUncAcHandler = () => setCollapsed(!collapsed)

  return (
    <div>
      <AccordionTitle title={titleValue} onClick={onClickUncAcHandler} />
      {!collapsed && <AccordionBody />}
    </div>
  )
}

export type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle({ title, onClick }: AccordionTitlePropsType) {
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

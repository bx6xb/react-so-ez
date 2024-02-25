import React, { useState } from "react"

export type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean;
}

function UncontrolledaAcordion({ titleValue }: AccordionPropsType) {
  // const collapsed = true;

  let [collapsed, setCollapsed] = useState(false)

  const onClickUncAcHandler = () => setCollapsed(!collapsed)

  return (
    <div>
      <AccordionTitle title={titleValue} onClick={onClickUncAcHandler} />
      {/* <button onClick={onClickUncAcHandler}>TOGGLE</button> */}
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

// export type AccordionBodyPropsType = {
//   numb: number;
// };
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

export default UncontrolledaAcordion

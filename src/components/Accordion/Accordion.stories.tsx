import Accordion from "./Accordion"
import { useState } from "react"

export default {
  component: Accordion,
}

export const CollapsedAccordion = () => {
  return <Accordion collapsed={true} titleValue="Collapsed Accordion" onChange={() => {}} />
}

export const OpenedAccordion = () => {
  return <Accordion collapsed={false} titleValue="Opened Accordion" onChange={() => {}} />
}

export const AccordionDemo = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  return (
    <Accordion
      collapsed={isCollapsed}
      titleValue="Opened Accordion"
      onChange={() => {
        setCollapsed(!isCollapsed)
      }}
    />
  )
}

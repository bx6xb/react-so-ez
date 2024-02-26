import { Accordion } from "./Accordion"
import { useState } from "react"
import { action } from "@storybook/addon-actions"

export default {
  component: Accordion,
}

const callback = action("accordion mode change event fired")

export const CollapsedAccordion = () => {
  return <Accordion collapsed={true} titleValue="Collapsed Accordion" onChange={callback} />
}

export const OpenedAccordion = () => {
  return <Accordion collapsed={false} titleValue="Opened Accordion" onChange={callback} />
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

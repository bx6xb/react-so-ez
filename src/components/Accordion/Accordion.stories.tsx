import { Accordion } from "./Accordion"
import { useState } from "react"
import { action } from "@storybook/addon-actions"

export default {
  component: Accordion,
}

const callback = action("accordion mode change event fired")

const users = [
  { title: "Yan", value: 1 },
  { title: "Veronika", value: 2 },
  { title: "Sanya", value: 3 },
]

const onClick = (value: any) => {
  action("some item was clicked")
  console.log(value)
}

export const CollapsedAccordion = () => {
  return (
    <Accordion onClick={onClick} items={users} collapsed={true} titleValue="Collapsed Accordion" onChange={callback} />
  )
}

export const OpenedAccordion = () => {
  return (
    <Accordion onClick={onClick} items={users} collapsed={false} titleValue="Opened Accordion" onChange={callback} />
  )
}

export const AccordionDemo = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  return (
    <Accordion
      onClick={onClick}
      items={users}
      collapsed={isCollapsed}
      titleValue="Opened Accordion"
      onChange={() => {
        setCollapsed(!isCollapsed)
      }}
    />
  )
}

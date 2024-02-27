import { useState } from "react"
import { Select } from "./Select"

export default {
  title: "Select",
  component: Select,
}

const users = [
  { title: "Yan", value: 1 },
  { title: "Veronika", value: 2 },
  { title: "Sanya", value: 3 },
]

export const SelectStory = () => {
  let [value, setValue] = useState(0)

  const onClick = (value: number) => {
    setValue(value)
  }

  return <Select items={users} value={value} onClick={onClick} />
}

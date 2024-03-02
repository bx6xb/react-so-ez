import { useMemo, useState } from "react"
import { ItemType, Select } from "./Select"

export default {
  title: "Select",
  component: Select,
}

const users: ItemType[] = [
  { name: "Yan", value: 1, technologies: ["HTML", "CSS", "JS", "React"] },
  { name: "Veronika", value: 2, technologies: [] },
  { name: "Sanya", value: 3, technologies: ["HTML"] },
]

const onClick = (value: number, setValue: (value: number) => void) => {
  setValue(value)
}

export const MySelect = () => {
  let [value, setValue] = useState(0)
  let [count, setCount] = useState(0)

  console.log("SelectStory")

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.technologies.length > 0)
  }, [value])

  return (
    <>
      <Select
        items={filteredUsers}
        value={value}
        onClick={onClick}
        setValue={setValue}
      />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}

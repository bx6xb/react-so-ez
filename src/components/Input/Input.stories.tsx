import { ChangeEvent, useEffect, useRef, useState } from "react"
import { action } from "@storybook/addon-actions"

export default {
  title: "input",
}

export const UncontrolledInput = () => <input />

export const UncontrolledInputWithTrackingValue = () => {
  let [value, setValue] = useState("")

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <input value={value} onChange={onChangeInputHandler} /> - {value}
    </>
  )
}

export const UncontrolledInputWithTrackingValueByButton = () => {
  let [value, setValue] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)

  const onClickBtnHandler = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value)
    }
  }

  return (
    <>
      <input ref={inputRef} /> <button onClick={onClickBtnHandler}>+</button> -{" "}
      {value}
    </>
  )
}

export const ControlledInput = () => {
  let [value, setValue] = useState("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return <input value={value} onChange={onChange} />
}

export const ControlledCheckbox = () => {
  let [value, setValue] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }

  return <input type="checkbox" checked={value} onChange={onChange} />
}

export const ControlledSelect = () => {
  let [value, setValue] = useState("")

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <select value={value} onChange={onChange}>
      <option value="0">None</option>
      <option value="1">Dubai</option>
      <option value="2">Almaty</option>
      <option value="3">Minsk</option>
    </select>
  )
}

export const ControlledInputWithFixedValue = () => (
  <input value={"some value"} />
)

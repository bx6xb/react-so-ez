import { ChangeEvent, useRef, useState } from "react"

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

  const save = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value)
    }
  }

  return (
    <>
      <input ref={inputRef} /> <button onClick={save}>+</button> Actual value: {value}
    </>
  )
}

export const ControlledInputWithFixedValue = () => <input value={"some value"} />

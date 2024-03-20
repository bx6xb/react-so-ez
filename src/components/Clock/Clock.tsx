import { useEffect, useState } from "react"
import { AnalogClock } from "./AnalogClock/AnalogClock"
import { DigitalClock } from "./DigitalClock/DigitalClock"

type ClockPropsType = {
  view?: string
}

export const Clock = (props: ClockPropsType) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  let view
  switch (props.view) {
    case "analog":
      view = <AnalogClock time={date} />
      break
    default:
      view = <DigitalClock time={date} />
  }

  return <div>{view}</div>
}

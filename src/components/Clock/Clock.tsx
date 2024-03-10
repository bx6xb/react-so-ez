import { useEffect, useState } from "react"

type ClockPropsType = {}

const addZeroToDate = (num: number) => (num < 10 ? "0" : "") + num

export const Clock = (props: ClockPropsType) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("zenow")
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <span>{addZeroToDate(date.getHours())}</span>:<span>{addZeroToDate(date.getMinutes())}</span>:
      <span>{addZeroToDate(date.getSeconds())}</span>
    </div>
  )
}

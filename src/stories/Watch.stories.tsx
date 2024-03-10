import { useEffect, useMemo, useState } from "react"

export default {
  title: "Watch demo",
}

const getCurrentTime = () =>
  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

export const Watch = () => {
  const [time, setTime] = useState<string>(getCurrentTime)

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getCurrentTime), 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <h1>{time}</h1>
}

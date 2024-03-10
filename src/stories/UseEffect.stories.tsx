import { useEffect, useMemo, useState } from "react"

export default {
  title: "UseEffect demo",
}

export const Example = () => {
  // const initValue = useMemo(generateData, [])
  const [count, setCount] = useState(0)
  const [fake, setFake] = useState(0)

  useEffect(() => {
    console.log("ComponentDidMount")

    return () => {
      console.log("ComponentWillUnmount")
    }
  }, [])

  useEffect(() => {
    console.log("ComponentDidUpdate")
  })

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <button onClick={() => setFake((prev) => prev - 1)}>{fake}</button>
    </>
  )
}

export const SetTimeoutExample = () => {
  const [count, setCount] = useState(0)
  const [fake, setFake] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log("tick: " + count)
      setCount((prev) => prev + 1)
    }, 1000)
  }, [])

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <button onClick={() => setFake((prev) => prev - 1)}>{fake}</button>
    </>
  )
}

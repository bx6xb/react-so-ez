import { useMemo, useState } from "react"

export default {
  title: "useState demo",
}

const generateData = () => {
  console.log("generateData")
  return 5981983
}

export const Example1 = () => {
  console.log("Example1")
  // const initValue = useMemo(generateData, [])

  const [count, setCount] = useState(generateData)

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  )
}

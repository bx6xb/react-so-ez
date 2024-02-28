import React, { useState } from "react"

export default {
  title: "React.memo demo",
}

export const NewMessageCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

export const Users = React.memo((props: { users: string[] }) => {
  console.log("users render")

  return (
    <ul>
      {props.users.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  )
})

export const Example1 = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(["Yan", "Veronika", "Sanya"])

  const addUser = () => {
    setUsers([...users, "zenow " + new Date().getTime()])
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessageCounter count={count} />
      <Users users={users} />
    </>
  )
}

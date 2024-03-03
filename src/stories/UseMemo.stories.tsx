import React, { useCallback, useMemo, useState } from "react"

export default {
  title: "useMemo",
}

export const DifficultCountingExample = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let result = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake !== 1000000000) {
        fake += 1
      }
      result *= i
    }
    return result
  }, [a])

  resultB = useMemo(() => {
    let result = 1
    for (let i = 1; i <= b; i++) {
      result *= i
    }
    return result
  }, [b])

  return (
    <>
      <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)} />
      <input type="number" value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <h2>result for a: {resultA}</h2>
      <h2>result for b: {resultB}</h2>
    </>
  )
}

export const NewMessageCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

export const Users = React.memo((props: { users: string[] }) => {
  console.log("Users")

  return (
    <ul>
      {props.users.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  )
})

export const ReactMemoAndUseMemo = () => {
  console.log("ReactMemoAndUseMemo")
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(["Yan", "Veronika", "Sanya"])

  const filteredUsers = useMemo(() => users.filter((u) => u.toLowerCase().includes("y")), [users])

  const addUser = () => setUsers([...users, "zenyow"])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      {count}
      <Users users={filteredUsers} />
    </>
  )
}

export const likeUseCallback = () => {
  console.log("likeUseCallback")
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState(["HTML", "CSS", "JS"])

  const filteredBooks = useMemo(() => books.filter((u) => u.toLowerCase().includes("s")), [books])

  const addBook = useCallback(() => {
    setBooks([...books, "Reacts " + new Date().getTime()])
  }, [books])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <Books books={filteredBooks} addBook={addBook} />
    </>
  )
}

type BooksPropsType = { books: string[]; addBook: () => void }

export const Books = React.memo((props: BooksPropsType) => {
  console.log("BooksSecret")
  return (
    <>
      <button onClick={props.addBook}>add book</button>
      <ul>
        {props.books.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </>
  )
})

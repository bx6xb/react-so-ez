import { KeyboardEvent, useEffect, useState } from "react"
import s from "./Select.module.css"

export type ItemType = {
  title: string
  value: number
}

type SelectPropsType = {
  value: number
  items: ItemType[]
  onClick: (value: number) => void
}

export function Select(props: SelectPropsType) {
  const [isActive, setActive] = useState(false)
  const [hoveredValue, setHoveredValue] = useState(props.value)

  const selectedItem = props.items.find((i) => i.value === props.value)!

  const toggleItems = () => setActive(!isActive)

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      let value = hoveredValue - 1
      setHoveredValue(value < 1 ? props.items.length : value)
    }
    if (e.key === "ArrowDown") {
      let value = hoveredValue + 1
      setHoveredValue(value === props.items.length + 1 ? 1 : value)
    }
    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false)
    }
  }

  useEffect(() => {
    props.onClick(hoveredValue)
  }, [hoveredValue])

  return (
    <div onKeyDown={onKeyDown} tabIndex={0} style={{ display: "inline-block" }}>
      <span className={s.select} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {isActive && (
        <ul className={s.items}>
          {props.items.map((i) => {
            const onClick = () => {
              props.onClick(i.value)
              setActive(false)
            }

            const onMouseEnter = () => {
              setHoveredValue(i.value)
            }

            return (
              <li
                key={i.value}
                onMouseEnter={onMouseEnter}
                onClick={onClick}
                className={s.item + (hoveredValue === i.value ? " " + s.selected : "")}
              >
                {i.title}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

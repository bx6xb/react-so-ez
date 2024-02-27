type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}

export function Accordion({ titleValue, collapsed, onChange, items, onClick }: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={titleValue} onChange={onChange} />
      {!collapsed && <AccordionBody items={items} onClick={onClick} />}
    </div>
  )
}

export type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle({ title, onChange }: AccordionTitlePropsType) {
  return (
    <div>
      <h3 onClick={() => onChange()}>{title}</h3>
    </div>
  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

function AccordionBody({ items, onClick }: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        {items.map((i) => {
          const onClickHandler = () => {
            onClick(i.value)
          }

          return (
            <li onClick={onClickHandler} key={i.value}>
              {i.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

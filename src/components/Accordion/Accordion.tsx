type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
}

export function Accordion({ titleValue, collapsed, onChange }: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={titleValue} onChange={onChange} />
      {!collapsed && <AccordionBody />}
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

function AccordionBody() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

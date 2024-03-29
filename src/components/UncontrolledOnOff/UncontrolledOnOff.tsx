import { useState } from "react"

type UncontrolledOnOffPropsType = {
  defaultValue?: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
  let [on, setOn] = useState(props.defaultValue || false)

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "2px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "white",
  }
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "2px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: on ? "white" : "red",
  }
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "15px",
    border: "2px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  }

  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          setOn(true)
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOn(false)
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

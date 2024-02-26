export type OnOff = {
  on: boolean
  setOn?: (value: boolean) => void
}

export function OnOff({ on, setOn }: OnOff) {
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
          setOn && setOn(true)
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          setOn && setOn(false)
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

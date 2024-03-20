const addZeroToDate = (num: number) => (num < 10 ? "0" : "") + num

type DigitalClockPropsType = {
  time: Date
}

export const DigitalClock = (props: DigitalClockPropsType) => {
  return (
    <>
      <span>{addZeroToDate(props.time.getHours())}</span>:
      <span>{addZeroToDate(props.time.getMinutes())}</span>:
      <span>{addZeroToDate(props.time.getSeconds())}</span>
    </>
  )
}

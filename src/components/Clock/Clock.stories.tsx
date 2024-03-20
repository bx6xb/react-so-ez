import { Clock } from "./Clock"

export default {
  title: "Clock",
  component: Clock,
}

export const ClockExample = () => {
  return <Clock />
}

export const AnalogClockExample = () => {
  return <Clock view="analog" />
}

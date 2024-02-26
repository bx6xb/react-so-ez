import { useState } from "react"
import { OnOff } from "./OnOff"
import { action } from "@storybook/addon-actions"

export default {
  component: OnOff,
}

export const OnMode = () => {
  return <OnOff on={true} setOn={action("Mode is on")} />
}

export const OffMode = () => {
  return <OnOff on={false} setOn={action("Mode is off")} />
}

export const OnOffControlled = () => {
  const [isOn, setOn] = useState(true)
  return <OnOff on={isOn} setOn={setOn} />
}

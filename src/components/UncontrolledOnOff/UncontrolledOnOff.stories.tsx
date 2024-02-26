import { UncontrolledOnOff } from "./UncontrolledOnOff"

export default {
  component: UncontrolledOnOff,
}

export const UncontrolledOnOffStory = () => {
  return <UncontrolledOnOff />
}

export const UncontrolledOnOffIsOn = () => {
  return <UncontrolledOnOff defaultValue={true} />
}

export const UncontrolledOnOffIsOff = () => {
  return <UncontrolledOnOff defaultValue={false} />
}

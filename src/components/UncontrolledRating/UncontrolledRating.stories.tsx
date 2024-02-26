import { UncontrolledRating } from "./UncontrolledRating"
import { action } from "@storybook/addon-actions"

export default {
  component: UncontrolledRating,
}

const callback = action('rating on change event fired')

export const UncontrolledRatingStory = () => {
  return <UncontrolledRating onChange={callback} />
}

export const EmptyStars = () => {
  return <UncontrolledRating defaultValue={0} onChange={callback} />
}

export const Rating1 = () => {
  return <UncontrolledRating defaultValue={1} onChange={callback} />
}

export const Rating2 = () => {
  return <UncontrolledRating defaultValue={2} onChange={callback} />
}

export const Rating3 = () => {
  return <UncontrolledRating defaultValue={3} onChange={callback} />
}

export const Rating4 = () => {
  return <UncontrolledRating defaultValue={4} onChange={callback} />
}

export const Rating5 = () => {
  return <UncontrolledRating defaultValue={5} onChange={callback} />
}

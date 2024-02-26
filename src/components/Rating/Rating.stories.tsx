import { useState } from "react"
import Rating, { RatingValueType } from "./Rating"
import { action } from "@storybook/addon-actions"

export default {
  component: Rating,
}

const callback = action("rating on click event fired")

export const EmptyStars = () => {
  return <Rating value={0} onClick={callback} />
}

export const Rating1 = () => {
  return <Rating value={1} onClick={callback} />
}

export const Rating2 = () => {
  return <Rating value={2} onClick={callback} />
}

export const Rating3 = () => {
  return <Rating value={3} onClick={callback} />
}

export const Rating4 = () => {
  return <Rating value={4} onClick={callback} />
}

export const Rating5 = () => {
  return <Rating value={5} onClick={callback} />
}

export const ControlledRating = () => {
  const [value, setValue] = useState<RatingValueType>(0)
  return <Rating value={value} onClick={setValue} />
}

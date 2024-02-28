import { StateType, reducer, TOGGLE_COLLAPSED } from "./reducer"

test("collapsed should be true", () => {
  // data
  const state: StateType = {
    collapsed: false,
  }

  // action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })

  // expect
  expect(newState).not.toEqual(state)
  expect(newState.collapsed).toBe(true)
  expect(Object.keys(newState).length).toBe(1)
})

test("collapsed should be false", () => {
  // data
  const state: StateType = {
    collapsed: true,
  }

  // action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })

  // expect
  expect(newState).not.toEqual(state)
  expect(newState.collapsed).toBe(false)
  expect(Object.keys(newState).length).toBe(1)
})

test("reducer should throw error", () => {
  const state: StateType = {
    collapsed: true,
  }

  expect(() => reducer(state, { type: "FAKE_TYPE" })).toThrowError()
})

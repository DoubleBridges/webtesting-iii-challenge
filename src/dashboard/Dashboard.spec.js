import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DashBoard from './Dashboard';

test("it should render", () => {
  const toggleLocked = jest.fn()
  const toggleClosed = jest.fn()
    render (
    <DashBoard
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
        locked={false}
        closed={false}
    />
  )
})

test("toggleClosed is disabled when gate is locked", () => {
  const toggleLocked = jest.fn()
  const toggleClosed = jest.fn()
  const { getByTestId } = render (
    <DashBoard
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
        locked={false}
        closed={false}
    />
  )

  const closeButton = getByTestId(/closeButton/i)
  const lockButton = getByTestId(/lockButton/i)
  
  fireEvent.click(closeButton)
  fireEvent.click(lockButton)

  expect(closeButton).toBeDisabled()

})

test("toggleLocked is disabled when gate is opened", () => {
  const toggleLocked = jest.fn()
  const toggleClosed = jest.fn()
  const { getByTestId } = render (
    <DashBoard
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
        locked={true}
        closed={true}
    />
  )

  const lockButton = getByTestId(/closeButton/i)
  const closeButton = getByTestId(/lockButton/i)
  
  fireEvent.click(lockButton)
  fireEvent.click(closeButton)

  expect(lockButton).toBeDisabled()

})
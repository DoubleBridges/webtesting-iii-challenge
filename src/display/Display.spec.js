import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display';

test('it should render', () => {
  render(
    <Display />
  )
})



import * as React from 'react'
import * as classnames from 'classnames'
import * as css from './Home.css'

export const Home = props =>
  <div className={classnames(css.home)}>
    <ul>
      <li>
        usage classnames in Home.tsx
      </li>
      <li>
        Layout.tsx set background-color hot-pink using global styled jsx
      </li>
      <li>
        Search
      </li>
    </ul>
  </div>
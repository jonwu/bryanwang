import React from 'react'
import View from 'components/View'
import styles from './TouchableOpacity.module.css'
import { Link } from 'react-router-dom'

const TouchableOpacity = ({ children, disabled, style, to, ...props }) => {
  const tranformedProps = {
    'aria-disabled': disabled,
    className: disabled ? undefined : styles.touchable,
    style: {
      cursor: disabled ? 'auto' : 'pointer',
      opacity: disabled ? 0.1 : undefined,
      textDecoration: 'none',
      ...style
    },
    ...props
  }
  return to ? (
    <Link to={to} {...tranformedProps}>
      {children}
    </Link>
  ) : (
    <a {...tranformedProps}>{children}</a>
  )
}

export default TouchableOpacity

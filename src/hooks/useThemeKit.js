import React from 'react'
import { ThemeContext } from 'components/ThemeProvider'

export const useThemeKit = () => {
  const { theme, gstyles } = React.useContext(ThemeContext)
  return {
    theme,
    gstyles
  }
}

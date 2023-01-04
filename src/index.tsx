import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { BackgroundImage } from 'components/common/image'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BackgroundImage
      url='/images/theme.jpeg'
      style={{ backgroundSize: 'contain' }}
    >
      <App />
    </BackgroundImage>
  </ThemeProvider>,
  // </React.StrictMode>,
)

reportWebVitals()

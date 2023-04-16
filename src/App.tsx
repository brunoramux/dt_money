import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transaction'
import { TransactionsProvider } from './contexts/TransactionsContext'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transaction />
      </TransactionsProvider>
      <GlobalStyle />

    </ThemeProvider>
  )
}


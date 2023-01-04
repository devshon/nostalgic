import { FC, ReactNode } from 'react'
import { Column } from 'components/common/layout'
import { Header } from 'components/common/header'

export const Frame: FC<{ children: ReactNode }> = ({ children }) => (
  <Column style={{ minHeight: '100vh' }}>
    <Header />
    {children}
  </Column>
)

import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'components/common/image'
import { Column } from 'components/common/layout'
import { DescText, HeaderText } from 'components/common/text'
import { theme } from 'styles/theme'

interface MainImageProps {
  url: string
  title: string
  subject: string
}

export const MainImage: React.FC<MainImageProps> = ({
  url,
  title,
  subject,
}) => {
  return (
    <BackgroundContainer style={{ width: 660, height: 500 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <HeaderText
          fontFamily='L'
          style={{
            zIndex: 1,
            color: theme.color.white,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </HeaderText>
        <DescText style={{ color: theme.color.white, fontSize: theme.size.h3 }}>
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 660, height: 500 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

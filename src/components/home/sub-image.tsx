import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'components/common/image'
import { Column } from 'components/common/layout'
import { DescText, H2Text } from 'components/common/text'
import { theme } from 'styles/theme'

interface SubImageProps {
  url: string
  title: string
  subject: string
}

export const SubImage: React.FC<SubImageProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 400, height: 250 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <H2Text
          fontFamily='L'
          style={{
            zIndex: 1,
            color: theme.color.white,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </H2Text>
        <DescText style={{ color: theme.color.white, fontSize: theme.size.h5 }}>
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage url={url} style={{ width: 400, height: 250 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}

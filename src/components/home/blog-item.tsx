import React from 'react'
import styled from 'styled-components'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'components/common/image'
import { Column } from 'components/common/layout'
import { BaseText, DescText, H3Text, H5Text } from 'components/common/text'
import { theme } from 'styles/theme'
import { BlogProps } from 'environments/type'
import { subjectFormat, thumbnailFormat, titleFormat } from 'utils/format'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { BASE_URL } from 'environments/constant'

interface ListItemProps {
  item: BlogProps
}

const WIDTH = 300
const IMAGE_HEIGHT = 350

export const BlogItem: React.FC<ListItemProps> = ({ item }) => {
  const title = titleFormat(item.text)
  const subject = subjectFormat(item.text)
  const thumbnail = thumbnailFormat(item.text)
  return (
    <Link to={`/blog/${title}`}>
      <Main>
        {thumbnail && (
          <BackgroundContainer style={{ height: IMAGE_HEIGHT }}>
            <Column
              style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <H5Text style={{ color: theme.color.white }}>
                Click to post
              </H5Text>
            </Column>
            <CoverImageWrapper>
              <CoverImage className='coverImage' url={`/images/${thumbnail}`} />
            </CoverImageWrapper>
          </BackgroundContainer>
        )}
        <Column
          style={{
            border: `1px solid ${theme.color.background}`,
            backgroundColor: theme.color.white,
            padding: '20px 10px',
            gap: 10,
          }}
        >
          <Column style={{ gap: 5 }}>
            <H3Text style={{ fontWeight: theme.weight.bold }}>{title}</H3Text>
            <DescText style={{ fontSize: theme.size.small }}>
              {subject}
            </DescText>
          </Column>
          <BaseText
            style={{
              fontWeight: theme.weight.bold,
              fontSize: theme.size.small,
              color: theme.color.gray4,
            }}
          >
            {moment(item.createdAt).format('YYYY년 M월 D일')}
          </BaseText>
        </Column>
      </Main>
    </Link>
  )
}

const Main = styled(Column)`
  width: ${WIDTH}px;
  height: fit-content;
  cursor: pointer;
  :hover {
    .backgroundWrapper {
      opacity: 0.2;
    }
    .coverImage {
      width: ${WIDTH + 10}px;
      height: ${IMAGE_HEIGHT + 10}px;
    }
  }
`

const CoverImageWrapper = styled(BackgroundWrapper)`
  opacity: 1;
  width: ${WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  overflow: hidden;
`

const CoverImage = styled(BackgroundImage)`
  width: ${WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  transition: 0.5s;
`

import { FC, useEffect, useState } from 'react'
import { Column, Media } from 'components/common/layout'
import { theme } from 'styles/theme'
import { BaseText, HeaderText } from 'components/common/text'
import { Float } from 'components/common/float'
import { Frame } from 'components/common/frame'
import moment from 'moment'
import { Preview } from 'components/common/editor'
import { contentFormat, layoutFormat } from 'utils/format'

const BlogDetail: FC = () => {
  const [data, setData] = useState<string>()
  const path = require(`assets/posts/${decodeURI(window.location.pathname)
    .split('/')
    .pop()}`)
  console.log(path)
  useEffect(() => {
    fetch(process.env.NODE_ENV === 'development' ? path : path.split('.md')[0])
      .then((res) => res.text())
      .then((text) => setData(text))
  }, [])

  if (!data) return null
  const title = layoutFormat('title', data)
  const content = contentFormat(data)
  const date = layoutFormat('date', data)

  return (
    <Frame>
      <Column>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center' }}>
              <HeaderText fontFamily='L' style={{ color: theme.color.white }}>
                {title}
              </HeaderText>
              <BaseText
                style={{
                  color: theme.color.gray3,
                  fontWeight: theme.weight.bold,
                }}
              >
                {moment(date).format('M월 D일, YYYY')}
              </BaseText>
            </Column>
            <Column>
              <Preview source={content} />
            </Column>
          </Column>
        </Media>
      </Column>
      <Float />
    </Frame>
  )
}

export default BlogDetail

import { FC } from 'react'
import { Column, Media, Row } from 'components/common/layout'
import { MainImage } from 'components/home/main-image'
import { SubImage } from 'components/home/sub-image'
import { theme } from 'styles/theme'
import { Float } from 'components/common/float'
import { Frame } from 'components/common/frame'
import { BlogList } from 'components/home/blog-list'

const Home: FC = () => {
  return (
    <Frame>
      <Row style={{ justifyContent: 'center' }}>
        <Column>
          <Media>
            <Row>
              <MainImage
                url='/images/image-01.jpeg'
                title={`Flexible Developer`}
                subject={`나의 가치를 발산시킬 수 있는 공간에서\n퍼니하고 해피하게 일하기`}
              />
              <Column>
                <SubImage
                  url='/images/image-02.jpeg'
                  title={`Problem Create`}
                  subject={`문제 현상을 발견하고 창의적으로 발산하고\n근본 문제를 정의하는 것`}
                />
                <SubImage
                  url='/images/image-03.jpeg'
                  title={`Solution Search`}
                  subject={`문제만 정확히 정의했다면 해결은 쉽다`}
                />
              </Column>
            </Row>
          </Media>
        </Column>
      </Row>
      <Column
        style={{
          backgroundColor: theme.color.background,
          padding: '50px 0',
        }}
      >
        <Media>
          <BlogList />
        </Media>
      </Column>
      <Float />
    </Frame>
  )
}

export default Home

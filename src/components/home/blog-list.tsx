import React, { useEffect, useState } from 'react'
import { Column, Row } from 'components/common/layout'
import { BlogItem } from 'components/home/blog-item'
import { posts } from 'assets/posts'

export const BlogList: React.FC = () => {
  const [data, setData] = useState<string[]>([])
  useEffect(() => {
    Promise.all(
      posts.map((post) => {
        let path = require(`assets/posts/${post}`)
        if (process.env.NODE_ENV === 'production') path.split('.md')[0]
        return fetch(path)
      }),
    )
      .then((res) => Promise.all(res.map((res) => res.text())))
      .then((data) => setData(data))
  }, [])
  if (!data) return null
  const list: string[][] = [[], [], []]
  let count = 0
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (count === 3) count = 0
    list[count].push(item)
    count++
  }
  return (
    <Row style={{ justifyContent: 'space-between' }}>
      {list.map((data, index) => (
        <Column key={index} style={{ gap: 40 }}>
          {data.map((item, index) => (
            <BlogItem key={index} item={item} />
          ))}
        </Column>
      ))}
    </Row>
  )
}

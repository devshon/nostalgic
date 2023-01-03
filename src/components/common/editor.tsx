import { FC } from 'react'
import MDEditor from '@uiw/react-md-editor'

export const Preview: FC<{ source: string }> = ({ source }) => (
  <MDEditor.Markdown source={source} style={{ background: 'none' }} />
)

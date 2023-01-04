import { BASE_URL } from 'environments/constant'

export const layoutFormat = (key: string, text: string) =>
  text.split(`${key}(`)[1] ? text.split(`${key}(`)[1].split(')')[0] : ''

export const thumbnailFormat = (text: string) =>
  text.split(`](${BASE_URL}/images/`)[1]
    ? text.split(`](${BASE_URL}/images/`)[1].split(')')[0]
    : ''

export const contentFormat = (text: string) => text.split('---').slice(2).join()

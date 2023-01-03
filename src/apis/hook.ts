import useSWR from 'swr'
import qs from 'query-string'
import { getFetch } from 'apis/fetcher'
import { BlogProps } from 'environments/type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSWRBundle = <T>(url: string, params?: Record<string, any>) => {
  const wholeUrl = params ? url + '?' + qs.stringify(params) : url

  const { data, error, mutate } = useSWR<T>(wholeUrl, getFetch)

  return {
    data,
    error,
    mutate,
  }
}

export const useBlogs = () => useSWRBundle<BlogProps[]>(`/blog`)

export const useBlog = (id: number) => useSWRBundle<BlogProps>(`/blog/${id}`)

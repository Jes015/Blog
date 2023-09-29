import { useDebounce } from '@/hooks'
import { CTechs, type PostArray } from '@/models'
import { Filter } from '@/utils'
import { useMemo, useState } from 'react'

interface IParams {
  postsData: PostArray
}

const defaultPage = 1
const defaultNumberPostPerPage = 10

export const usePosts = ({ postsData }: IParams) => {
  const [posts] = useState<PostArray>(postsData)
  const [searchParamValue, setSearchParam] = useState('')
  const [filterByCategory, setFilterBy] = useState<string>(CTechs.all.name)
  const [page, setPage] = useState(defaultPage)
  const { newValue: newSearchParamValueValue } = useDebounce(searchParamValue)

  const addNewPage = () => {
    setPage(lastPage => lastPage + 1)
  }

  const setSearchParamValue = (searchParam: string) => {
    setPage(defaultPage)
    setSearchParam(searchParam)
  }

  const setFilterByCategory = (category: string) => {
    setPage(defaultPage)
    setFilterBy(category)
  }

  const filteredPosts = useMemo(() => {
    const filterInstance = new Filter(posts, { byCategory: filterByCategory, byValue: newSearchParamValueValue, maxPosts: page * defaultNumberPostPerPage })
    return filterInstance.filter()
  }, [newSearchParamValueValue, filterByCategory, page])

  return { filteredPosts, setSearchParamValue, setFilterByCategory, addNewPage }
}

import { useDebounce } from "@/hooks"
import { postCategories, type PostArray } from "@/models"
import { Filter } from "@/utils"
import { useMemo, useState } from "react"

interface IParams {
    postsData: PostArray
}

export const usePosts = ({ postsData }: IParams) => {
    const [posts] = useState<PostArray>(postsData)
    const [searchParamValue, setSearchParamValue] = useState('')
    const [filterByCategory, setFilterByCategory] = useState(postCategories.all)
    const { newValue: newSearchParamValueValue } = useDebounce(searchParamValue)

    const filteredPosts = useMemo(() => {
        const filterInstance = new Filter(posts, { byCategory: filterByCategory, byValue: newSearchParamValueValue})
        return filterInstance.filter()
    }, [newSearchParamValueValue, filterByCategory])

    return { filteredPosts, setSearchParamValue, setFilterByCategory }

}
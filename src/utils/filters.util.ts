import { CTechs, type PostArray, type PostData } from '@/models'

interface IFiltersType {
  byCategory: string
  byValue: string
  maxPosts: number
}

const defaultFiltersConfigValue: IFiltersType = {
  byCategory: CTechs.all.name,
  byValue: '',
  maxPosts: 10
}

export class Filter {
  private readonly postsData: PostArray
  private readonly filtersConfig: IFiltersType

  constructor (postsData: PostArray, filtersConfig?: IFiltersType) {
    this.postsData = postsData
    this.filtersConfig = filtersConfig ?? defaultFiltersConfigValue
  }

  filter () {
    const isByCategoryFilterByDefault = this.filtersConfig.byCategory === defaultFiltersConfigValue.byCategory
    const isByValueFilterByDefault = this.filtersConfig.byValue === defaultFiltersConfigValue.byValue

    if (isByValueFilterByDefault && isByCategoryFilterByDefault) {
      return this.getArrayByMaxPostsValue(this.postsData)
    }

    const newPostArray: PostArray = []

    this.postsData.forEach((postData) => {
      const isValidForCategoryFilter = isByCategoryFilterByDefault || this.filterByCategory(postData, this.filtersConfig.byCategory)
      if (!isValidForCategoryFilter) return

      const isValidForByValueFilter = isByValueFilterByDefault || this.filterByValue(postData, this.filtersConfig.byValue)
      if (!isValidForByValueFilter) return

      newPostArray.push(postData)
    })

    return this.getArrayByMaxPostsValue(newPostArray)
  }

  private readonly getArrayByMaxPostsValue = (postsArray: PostArray) => {
    return postsArray.slice(0, this.filtersConfig.maxPosts)
  }

  private filterByCategory (postData: PostData, toSearch: string) {
    return postData.data.types.some((type) => (
      type.toLocaleLowerCase().includes(toSearch.toLocaleLowerCase())
    ))
  }

  private filterByValue (postData: PostData, toSearch: string) {
    return postData.data.title.toLocaleLowerCase().includes(toSearch.toLocaleLowerCase())
  }
}

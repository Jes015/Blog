import { Filters, NotFound, PostCard } from '@/components'
import { useNearElement, usePosts } from '@/hooks'
import { CFrontRoutes, type PostArray } from '@/models'
import { useEffect, useRef, type LegacyRef } from 'react'
import styles from './lastPostsSection.module.css'

interface IProps {
  postsData: PostArray
}

export const LastPostsSection: React.FC<IProps> = ({ postsData }) => {
  const { filteredPosts, setFilterByCategory, setSearchParamValue, addNewPage } = usePosts({ postsData })
  const infinityScrollRef = useRef<HTMLDivElement>()
  useNearElement(infinityScrollRef, () => { addNewPage() })

  useEffect(() => {console.log('effect 1')}, [])
  useEffect(() => {console.log('effect 2')}, [])
  useEffect(() => {console.log('effect 3')}, [])
  useEffect(() => {console.log('effect 4')}, [])
  useEffect(() => {console.log('effect 5')}, [])
  useEffect(() => {console.log('effect 6')}, [])
  useEffect(() => {console.log('effect 7')}, [])
  useEffect(() => {console.log('effect 8')}, [])
  useEffect(() => {console.log('effect 9')}, [])
  return (
        <section id="layout__post">
            <header className={styles.sectionLayout__header}>
                <h2 className={styles.sectionLayout__title}>Posts</h2>
                <Filters {...{ setSearchParamValue, setFilterByCategory }} />
            </header>
            <main className={styles.postLayout__main}>
                {
                    filteredPosts[0] != null
                      ? filteredPosts.map((postData) => {
                        return (
                                <PostCard
                                    key={postData.slug + new Date().getMilliseconds()}
                                    title={postData.data.title}
                                    description={postData.data.description}
                                    url={CFrontRoutes.dynamic.post(postData.slug)}
                                    techs={postData.data.types}
                                    publishDate={postData.data.publishDate}
                                />
                        )
                      })

                      : <NotFound />
                }
                {/* for infinity scroll  */}
                <div ref={infinityScrollRef as LegacyRef<HTMLDivElement>} />
            </main>
        </section>
  )
}

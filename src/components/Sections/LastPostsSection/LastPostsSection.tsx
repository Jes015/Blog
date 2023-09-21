import { Filters, NotFound, PostCard } from "@/components"
import { usePosts } from "@/hooks"
import { CFrontRoutes, type PostArray } from "@/models"
import styles from './lastPostsSection.module.css'

interface IProps {
    postsData: PostArray
}

export const LastPostsSection: React.FC<IProps> = ({ postsData }) => {
    const { filteredPosts, setFilterByCategory, setSearchParamValue } = usePosts({ postsData })

    return (
        <section id="layout__post">
            <header className={styles.sectionLayout__header}>
                <h2 className={styles.sectionLayout__title}>Posts</h2>
                <Filters {...{ setSearchParamValue, setFilterByCategory }} />
            </header>
            <main className={styles.postLayout__main}>
                {
                    filteredPosts[0] != null
                        ?
                        filteredPosts.map((postData) => {
                            return (
                                <PostCard
                                    key={postData.slug}
                                    title={postData.data.title}
                                    description={postData.data.description}
                                    url={CFrontRoutes.post(postData.slug)}
                                />
                            )
                        })

                        :
                        <NotFound />
                }
            </main>
        </section>
    )
}
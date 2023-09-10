import { Filters, PostCard } from "@/components"
import { useDebounce } from "@/hooks"
import { CFrontRoutes, postCategories, type PostArray } from "@/models"
import { getPosts } from "@/services"
import { useEffect, useState } from "react"
import styles from './lastPostsSection.module.css'

export const LastPostsSection = () => {
    const [posts, setPosts] = useState<PostArray>([])
    const [defaultSearchParamValue, setDefaultSearchParamValue] = useState('')
    const [defaultFilterBy, setDefaultFilterBy] = useState(postCategories.javascript)
    const [error, setError] = useState<null | string>(null)
    const { newValue } = useDebounce(defaultSearchParamValue)

    useEffect(() => {
        if (newValue == null) {
            return
        }

        const asyncExecutionContext = async () => {
            const data = await getPosts(newValue, defaultFilterBy)

            if (data.postsData[0] == null) {
                setError('Not found')
                setPosts([])
            } else {
                setError(null)
                setPosts(data.postsData)
            }
        }

        void asyncExecutionContext()
    }, [newValue, defaultFilterBy])

    return (
        <section id="layout__post">
            <header className={styles.sectionLayout__header}>
                <h2 className={styles.sectionLayout__title}>Posts</h2>
                <Filters {...{ setDefaultSearchParamValue, setDefaultFilterBy }} />
            </header>
            <main className={styles.postLayout__main}>
                {
                    error && <h1>{error}</h1>
                }
                {
                    posts[0] != null &&
                    posts.map((postData) => {
                        console.log(postData)
                        return (
                            <PostCard
                                key={postData.slug}
                                title={postData.postData.data.title}
                                description={postData.postData.data.description}
                                url={CFrontRoutes.post(postData.slug)}
                            />
                        )
                    })
                }
            </main>
        </section>
    )
}
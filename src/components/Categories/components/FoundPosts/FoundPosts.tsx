import { Post } from "@/components"

const numRep = 10
const postArray = Array(numRep).fill((key: number) => <Post key={key}
    dynamicStyles={{
        border: 'post--border-top',
        padding: "post--padding-y",
        anchor: "post__anchor--130",
    }} />)

export const FoundPosts = () => {
    return (
        <section>
            {
                postArray.map((post, index) => post(index))
            }
        </section>
    )
}
import { Post } from "../../shared/entities/Post"

const PostComponent = ({ data }: { data: Post }) => {
    return (
        <section className="border-b-[1px]  px-2">
            <h3>{data.user.username}</h3>
            <span>{data.text}</span>

        </section>
    )
}

export default PostComponent
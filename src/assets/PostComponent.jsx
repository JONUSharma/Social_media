import { useContext, useEffect } from "react"
import Post from "./Post"
import { PostList } from "./Store/PostContext.jsx"

const PostComponent = () => {
    const { PostData } = useContext(PostList)

    // useEffect(() => {
    //     const Controller = new AbortController();
    //     const signal = Controller.signal;
    //     setInterval(() => {
    //         console.log(`Fetched successfully...  ${signal}`)
    //     }, 3000)
    //     return () => {

    //         console.log("Cleaning");
    //         Controller.abort();
    //     }
    // }, [])

    return (
        <div className="PostComponent">
            {
                PostData.map((item) => (
                    <Post key={item.id} post={item}></Post>
                ))
            }

        </div >
    )
}
export default PostComponent

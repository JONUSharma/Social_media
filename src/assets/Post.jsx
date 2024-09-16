import React, { useContext } from 'react'
import { PostList } from './Store/PostContext'
import "bootstrap/dist/css/bootstrap.min.css"
function Post({ post }) {
    const { RemovePost } = useContext(PostList)


    return (
        <>

            <div className='PostContainer Posts'>
                <div className="card" style={{ width: "18rem," }}>
                    <div className="card-body ">
                        <h5>{post.userid}</h5>
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                        <button type="button" onClick={() => RemovePost(post.id)} className="  btn  btn-outline-danger me-2">Remove</button>
                        
                    </div>

                </div>
            </div>

        </>
    )
}

export default Post

import React, { useContext, useRef } from 'react'
import { PostList } from './Store/PostContext';
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const { AddPost } = useContext(PostList);
    const Navigate = useNavigate("");
    const UserIdInput = useRef("");
    const UserPostTitle = useRef("");
    const UserTextArea = useRef("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        const userId = UserIdInput.current.value;
        const userTitle = UserPostTitle.current.value;
        const userText = UserTextArea.current.value;
        AddPost(userId, userTitle, userText);

        Navigate("/")

    }
    return (
        <form onSubmit={HandleSubmit} >
            <div className="CreatePostContainer">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">User id</label>
                    <input required ref={UserIdInput} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your your Userid   " />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Post Title</label>
                    <input required ref={UserPostTitle} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the title for your post...   " />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea required ref={UserTextArea} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <center>
                    <button type='submit' className=' btn btn-outline-dark bg-success'>Submit</button>
                </center>
            </div>
        </form>
    )
}

export default CreatePost

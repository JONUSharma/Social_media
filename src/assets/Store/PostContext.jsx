import { createContext, useEffect, useReducer } from "react";
import Post from "../Post";


export const PostList = createContext(
    {
        PostData: [],
        AddPost: () => { },
        RemovePost: () => { }
    }
);


const PostListReducer = (currentVal, action) => {
    let newPostList = currentVal;
    if (action.type === "Delete_Post") {
        newPostList = currentVal.filter((post) => post.id !== action.payload.Postid);
    }
    else {
        action.type === "ADD_POST",
            newPostList = [action.payload, ...currentVal]
    }
    return newPostList;
}

const PostComponentProvider = ({ children }) => {
    const [PostData, dispatchPostList] = useReducer(PostListReducer, DefaultValue);

    const RemovePost = (Postid) => {
        dispatchPostList({
            type: "Delete_Post",
            payload: { Postid },
        })
    }
    let AddPost = (userId, userTitle, userText) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userid: userId,
                body: userText,
                title: userTitle,
                date: Date(),
            },
            
        })
    }

    return (
        <div>
            < PostList.Provider value={{ PostData, AddPost, RemovePost }} > {children}</PostList.Provider>
        </div>

    )
}

const DefaultValue = [

    {
        id: Date.now(),
        body: "Bakil want go to gym",
        title: "What Bakil want",
        reaction: "like"
    },

]

export default PostComponentProvider
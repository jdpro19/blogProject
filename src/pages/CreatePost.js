import React, { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title : </label>
                    <input placeholder="Blog Title.." 
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                </div>
                <div className="inputGp">
                    <label> Post : </label>
                    <textarea placeholder="Blog Post.."
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}
                />
                </div>
                <button>Submit Post</button>
            </div>
        </div>        
    );
}

export default CreatePost;
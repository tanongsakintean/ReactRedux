import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./mangePosts";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center p-4    ">
      <div className=" mt-10 py-3 px-10 bg-[#F5EBE0]  w-[45rem] rounded-lg ">
        <div className=" flex  my-4 justify-center items-center">
          <h1 className="text-3xl text-[#DBA39A]  font-bold  font-mono cursive ">
            Create Post
          </h1>
        </div>
        <form action="" className="w-full space-y-4">
          <div className="flex flex-col space-y-2 ">
            <label className="font-mono text-[#DBA39A] cursive font-bold text-xl ">
              Enter post title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="  text-xl   outline-none   px-2 rounded-md  shadow-md "
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-mono cursive font-bold text-[#DBA39A] text-xl ">
              Enter post <span className="text-red-500">*</span>
            </label>
            <textarea
              cols="30"
              rows="5"
              onChange={(e) => setContent(e.target.value)}
              className=" text-xl outline-none px-2 rounded-md shadow-md"
              required
              value={content}
            ></textarea>
          </div>
          <div className="flex justify-center items-center ">
            <button
              onClick={(e) => {
                e.preventDefault();
                title != "" && content != ""
                  ? dispatch(addPost({ Title: title, Content: content }))
                  : null;
                setContent("");
                setTitle("");
              }}
              className="py-2 px-4 bg-blue-500 text-white font-bold font-mono cursive rounded-md "
            >
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;

import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./PostForm";
import AllPost from "./AllPost";

function App() {
  const post = useSelector((state) => state.posts.post);
  return (
    <div className="bg-[#FEFCF3] h-[100vh] overflow-y-scroll">
      <PostForm />
      {post.map((val, key) => {
        return <AllPost key={key} title={val.title} content={val.content} />;
      })}
    </div>
  );
}
export default App;

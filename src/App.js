import React, { useState } from "react";
import PostForm from "./components/PostForm";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
      <PostForm onSubmit={handleSubmit} />
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            {" "}
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

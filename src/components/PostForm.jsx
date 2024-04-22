import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Заголовок"
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Основной текст"
        ></textarea>
        <button type="submit">Опубликовать</button>
      </form>
      <div>
        <h2>Предпросмотр</h2>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};

export default PostForm;

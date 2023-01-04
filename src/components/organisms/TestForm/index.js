import React, { useState, useEffect } from "react";
import { getBlogPostsAPI, addBlogPostAPI } from "../../../services/apiBlog";

export const TestForm = () => {
  const [datos, setDatos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await getBlogPostsAPI();
      setDatos(res.data);
      return;
    }

    try {
      fetchMyAPI();
      return;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await addBlogPostAPI(title, content);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {datos ? (
        datos.map((item) => <p key={item._id}>{item.title}</p>)
      ) : (
        <p>no</p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

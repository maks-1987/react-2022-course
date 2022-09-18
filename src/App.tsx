import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/app-router/Home";
import About from "./components/app-router/About";
import NewPost from "./components/app-router/NewPost";
import Missing from "./components/app-router/Missing";
import PostPage from "./components/app-router/PostPage";
import Layout from "./components/app-router/Layout";
// import { format } from "date-fns";
import api from "./api/posts";
import { EditPost } from "./components/app-router/EditPost";
import usesAxiosFetch from "./hooks/usesAxiosFetch";
import { ENDPOINTS } from "./Endpoints/path";

function App() {
  const [posts, setPosts] = useState([] as IPost[]);

  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([] as IPost[]);

  const { data, isLoading, fetchError } = usesAxiosFetch(
    ENDPOINTS.TYPICODE_Serv_Posts
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (el) =>
        el.body.toLowerCase().includes(search.toLowerCase()) ||
        el.title.toLowerCase().includes(search.toLowerCase()) ||
        String(el.userId).includes(search)
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search]);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((el) => el.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err: unknown | any) {
      console.log(err.message);
    }
  };

  const handleEdit = async (id: number) => {
    // const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id: id,
      title: editPostTitle,
      // datetime,
      body: editPostBody,
      // userId: posts[id].userId,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((el) => (el.id === id ? { ...response.data } : el)));
      setEditPostTitle("");
      setEditPostBody("");
      navigate("/");
    } catch (err: unknown | any) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    // const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id: id, title: postTitle, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err: unknown | any) {
      console.log(err.message);
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />}
        >
          <Route
            index
            element={
              <Home
                posts={searchResult}
                fetchError={fetchError}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="newpost"
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditPost
                posts={posts}
                editPostTitle={editPostTitle}
                setEditPostTitle={setEditPostTitle}
                editPostBody={editPostBody}
                setEditPostBody={setEditPostBody}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

export interface IPost {
  userId?: number | string;
  id: number;
  title: string;
  datetime: string;
  body: string;
}

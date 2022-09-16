import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/app-router/Home';
import About from './components/app-router/About';
import NewPost from './components/app-router/NewPost';
import Missing from './components/app-router/Missing';
import PostPage from './components/app-router/PostPage';
import Layout from './components/app-router/Layout';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      datetime: 'July 01, 2022 11:17:37 AM',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      title: 'qui est esse',
      datetime: 'July 02, 2022 11:17:37 AM',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      datetime: 'July 03, 2022 11:17:37 AM',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      id: 4,
      title: 'eum et est occaecati',
      datetime: 'July 04, 2022 11:17:37 AM',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
  ]);

  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([] as IPost[]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (el) =>
        el.body.toLowerCase().includes(search.toLowerCase()) ||
        el.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredResults.reverse());
  }, [posts, search]);

  const handleDelete = (id: number) => {
    const postList = posts.filter((el) => el.id !== id);
    setPosts(postList);
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');

    const newPost = { id: id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];

    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
          <Route index element={<Home posts={searchResult} />} />
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
          <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

export interface IPost {
  id: number;
  title: string;
  datetime: string;
  body: string;
}

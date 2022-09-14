import { Route, Routes } from 'react-router-dom';
import Nav from './components/app-router/Nav';
import Footer from './components/app-router/Footer';
import Header from './components/app-router/Header';
import Home from './components/app-router/Home';
import About from './components/app-router/About';
import NewPost from './components/app-router/NewPost';
import Missing from './components/app-router/Missing';
import PostPage from './components/app-router/PostPage';
import Layout from './components/app-router/Layout';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="newpost" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

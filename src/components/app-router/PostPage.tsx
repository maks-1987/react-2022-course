import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {IPost} from '../../App';

type Props = {
  posts: IPost[];
  handleDelete: Function;
};

export default function PostPage({posts, handleDelete}: Props) {
  const {id} = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="postPage">
      <article className="post">
        {post && (
          <>
            <h3 className="postTitle">{post.title}</h3>
            {/*<p className="postDate">{post.datetime}</p>*/}
            <p className="postDate">User ID: {post.userId}</p>
            <p>{post.body}</p>
            <Link to={`/edit/${id}`}>
              <button className='editBtn' style={{backgroundColor: '#a4b6ff'}}>Edit Post</button>
            </Link>
            <button
              className='deleteBtn'
              type="button"
              onClick={() => handleDelete(post.id)}
              style={{
                marginLeft: '10px'
              }}
            >
              Delete post
            </button>
          </>
        )}
        {!post && (
          <>
            <p>Post does not exist...</p>
            <p style={{marginTop: '10px', textDecoration: 'underline'}}>
              <Link to="/">Back to Home</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

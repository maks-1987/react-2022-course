import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPost } from '../../App';

type Props = {
  posts: IPost[];
  handleDelete: Function;
};

export default function PostPage({ posts, handleDelete }: Props) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="postPage">
      <article className="post">
        {post && (
          <>
            <h3 className="postTitle">{post.title}</h3>
            <p className="postDate">{post.datetime}</p>
            <p>{post.body}</p>
            <button
              type="button"
              onClick={() => handleDelete(post.id)}
              style={{
                padding: '6px 8px',
                backgroundColor: 'red',
                border: '1px solid red',
                borderRadius: '6px',
                marginTop: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Delete post
            </button>
          </>
        )}
        {!post && (
          <>
            <p>Post does not exist...</p>
            <p style={{ marginTop: '10px', textDecoration: 'underline' }}>
              <Link to="/">Back to Home</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
}

// @flow
import * as React from 'react';
import {IPost} from "../../App";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

type Props = {
  posts: IPost[],
  handleEdit: Function,
  editPostTitle: string,
  setEditPostTitle: Function,
  editPostBody: string,
  setEditPostBody: Function
};

export function EditPost({posts, handleEdit, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody}: Props) {
  const {id} = useParams();
  const post = posts.find((el) => el.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title)
      setEditPostBody(post.body)
    }
  }, [post, setEditPostTitle, setEditPostBody])

  return (
    <main className="newPost">
      {editPostTitle &&
        <>
          <h3 style={{textAlign: 'left', marginBottom: '25px'}}>Edit Post</h3>
          <form className="newPostForm" onSubmit={(ev) => ev.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              id="postTitle"
              required
              value={editPostTitle}
              onChange={(e) => setEditPostTitle(e.target.value)}
            />
            <label htmlFor="postContent">Post:</label>
            <textarea
              id="postContent"
              required
              value={editPostBody}
              onChange={(e) => setEditPostBody(e.target.value)}
              style={{resize: 'vertical'}}
            />
            <button type='submit' onClick={() => handleEdit(post?.id)}>Submit</button>
          </form>
        </>
      }
      {!editPostTitle &&
        <>
          <p>Post does not exist...</p>
          <p style={{marginTop: '10px', textDecoration: 'underline'}}>
            <Link to="/">Back to Home</Link>
          </p>
        </>
      }
    </main>
  );
}
import { FormEventHandler } from 'react';

type Props = {
  postTitle: string;
  setPostTitle: Function;
  postBody: string;
  setPostBody: Function;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export default function NewPost({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }: Props) {
  return (
    <main className="newPost">
      <h3 style={{textAlign: 'left', marginBottom: '25px'}}>New Post</h3>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postContent">Post:</label>
        <textarea
          id="postContent"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          style={{resize: 'vertical'}}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}

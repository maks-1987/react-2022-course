import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../App';

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  // console.log('Post_date', post.datetime);
  return (
    <article className="post">
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
        {/*<p className="postDate">{post.datetime}</p>*/}
        <p className="postDate">User ID: {post.userId}</p>
      </Link>
      <p className="postBody">{post.body.length <= 35 ? post.body : `${post.body.slice(0, 25)}...`}</p>
      <hr style={{ margin: '15px 0px 20px 0px' }} />
    </article>
  );
}

import React from 'react';
import { IPost } from '../../App';
import Post from './Post';

type Props = {
  posts: IPost[];
};

export default function PostsFeed({ posts }: Props) {
  // console.log('postsFeed', posts)
  return (
    <>
      {posts.map((el: IPost) => (
        <Post key={el.id * Math.random() + Date()} post={el} />
      ))}
    </>
  );
}

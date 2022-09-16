import { IPost } from "../../App";
import PostsFeed from "./PostsFeed";

type Props = {
  posts: IPost[] 
};

export default function Home({posts}: Props) {

  return (
    <main className="home">
      {posts.length ? (
        <PostsFeed posts={posts}/>
      ) : (
        <p>No posts...</p>
      )}
    </main>
  );
}

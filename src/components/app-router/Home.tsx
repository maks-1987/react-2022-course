import { IPost } from "../../App";
import PostsFeed from "./PostsFeed";

type Props = {
  posts: IPost[];
  fetchError: string | null;
  isLoading: boolean;
};

export default function Home({ posts, isLoading, fetchError }: Props) {
  return (
    <main className="home">
      {isLoading && <p>Posts is loading...</p>}
      {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {!fetchError && !isLoading &&
        (posts.length ? <PostsFeed posts={posts} /> : <p>No posts...</p>)}
    </main>
  );
}

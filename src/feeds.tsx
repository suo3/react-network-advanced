import React from "react";
import { get } from "./utils";

const Feeds = ({ category }: { category: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [feeds, setFeeds] = React.useState<Feed[]>([]);

  React.useEffect(() => {
    const fetchFeeds = async () => {
      try {
        setLoading(true);
        const data = await get(`/articles/${category}`);
        setLoading(false);
        setFeeds(data as Feed[]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeeds();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Your Feeds</h2>
      <div>
        {feeds.map((feed) => (
          <>
            <h3>{feed.title}</h3>
            <p>{feed.description}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Feeds;

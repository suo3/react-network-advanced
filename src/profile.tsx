import React from "react";
import { get } from "./utils";
import Friends from "./friends";
import Feeds from "./feeds";
import About from "./about";

const Profile = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>();
  const [user, setUser] = React.useState<User | undefined>();
  const [friends, setFriends] = React.useState<User[]>([]);

  React.useEffect(() => {
    const fetchUserAndFriends = async () => {
      try {
        setLoading(true);
        const [user, friends] = await Promise.all([
          get<User>(`/users/${id}`),
          get<User[]>(`/users/${id}/friends`),
        ]);
        setUser(user);
        setFriends(friends);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndFriends();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      {user && <About user={user} />}
      <Friends users={friends} />
      {user && <Feeds category={user.interests[0]} />}
    </>
  );
};

export default Profile;

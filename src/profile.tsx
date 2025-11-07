import React from "react";
import { get } from "./utils";

const Profile = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>();
  const [user, setUser] = React.useState<User | undefined>();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await get<User>(`/users/${id}`);
        setUser(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }
  return <div>{user?.name}</div>;
};

export default Profile;

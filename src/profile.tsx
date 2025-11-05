import React from "react";
import { get } from "./utils";

type User = {
  id: string;
  name: string;
};
const Profile = ({ id }: { id: string }) => {
  const [user, setUser] = React.useState<User | undefined>();

  React.useEffect(() => {
    const fetchUser = async () => {
      const data = await get<User>(`/users/${id}`);
      setUser(data);
    };
    fetchUser();
  }, [id]);

  return <div>{user && user.name}</div>;
};

export default Profile;

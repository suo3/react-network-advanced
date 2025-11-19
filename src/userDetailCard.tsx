import React from "react";
import { get } from "./utils";

const UserDetailCard = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [detail, setDetail] = React.useState<UserDetail | undefined>();

  React.useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true);
      try {
        const data = await get<UserDetail>(`/users/${id}/details`);
        setLoading(false);
        setDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeeds();
  }, [id]);

  if (loading || !detail) return <div>Loading...</div>;
  return <div>UserDetailCard</div>;
};

export default UserDetailCard;

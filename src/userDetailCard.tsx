import React from "react";
import { get } from "./utils";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

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
  return (
    <div>
      <Card>
        <CardHeader>
          <div>
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={`https://i.pravatar.cc/150?u=${detail.id}`}
            />
            <div>
              <h4>{detail.name}</h4>
              <p>{detail.twitter}</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <p>{detail.bio}</p>
        </CardBody>

        <CardFooter>
          <div>
            <p>
              <a href={detail.homepage}>{detail.homepage}</a>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserDetailCard;

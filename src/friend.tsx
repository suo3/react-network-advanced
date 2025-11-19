import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@nextui-org/react";
import Brief from "./brief";
//import UserDetailCard from "./UserDetailCard"

const Friend = ({ user }: { user: User }) => {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button>
          Open Popover
          <Brief user={user} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        {/*  <UserDetailCard id={user.id} /> */}
        <div>This is the popover content</div>
      </PopoverContent>
    </Popover>
  );
};

export default Friend;

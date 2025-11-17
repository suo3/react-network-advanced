import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "@nextui-org/react";
//import { Brief } from "./brief.tsx";
//import UserDetailCard from "./user-detail-card.tsx";

const Friend = () => {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>Popover Content</div>
        <div>This is the popover content</div>
      </PopoverContent>
    </Popover>
  );
};

export default Friend;

import React from "react";
import Friend from "./friend";

const Friends = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h2>Friends</h2>
      <div>
        {users.map((user) => (
          <Friend key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Friends;

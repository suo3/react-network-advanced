import React from "react";

const Friends = ({ users }: { users: User[] }) => {
  return (
    <div>
      <h2>Friends</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <img
              src={`https://i.pravatar.cc/150?u=${user.id}`}
              alt={`User ${user.id} avatar`}
            />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;

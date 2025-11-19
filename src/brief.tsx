import React from "react";

const Brief = ({ user }: { user: User }) => {
  return (
    <div>
      <div>
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`User ${user.name} avatar`}
          width={32}
          height={32}
        />
      </div>
      <div>
        <div>{user.name}</div>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Brief;

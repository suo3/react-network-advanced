import React from "react";

const About = ({ user }: { user: User }) => {
  return (
    <div>
      <div>
        <img src={user.image} alt={user.name} />
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.bio}</div>
      </div>
    </div>
  );
};

export default About;

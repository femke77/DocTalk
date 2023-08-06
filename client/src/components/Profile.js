import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

const Profile = () => {
  const user = useSelector((state) => state.user); // Assuming user information is stored in the Redux state

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.profileImage} alt={user.name} />
      {/* Other profile information */}
    </div>
  );
};

export default Profile;
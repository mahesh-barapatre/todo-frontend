import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div>
      {/*if user exits access name and email*/}
      <h1>{user?.name}</h1> 
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
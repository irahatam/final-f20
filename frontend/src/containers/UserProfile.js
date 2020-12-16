import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import KlassCard from "../components/KlassCard";

function UserProfile({}) {
  const [userProfileData, setUserProfileData] = useState({});
  const [userKlassData, setUserKlassData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://secret-brushlands-48608.herokuapp.com/klasses/${id}`)
      .then(function (response) {
        if (response.data) {
          setUserKlassData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div>
      <h1> User Profile</h1>
      <h2>My submissions:</h2>
      {userKlassData.map((klass, i) => (
        <KlassCard klassData={klass} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import KlassCard from "../components/KlassCard";

function UserProfile() {
  // FOR SOME REASON THIS DOESN'T WORK
  const [userKlassData, setUserKlassData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      // .get(`https://secret-brushlands-48608.herokuapp.com/profile/${id}`)
      .get(`http://localhost:4000/klasses/${id}`)
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
      <h1 className="Title">klasses.</h1>
      <h1> klasses posted by me: </h1>
      <div className="ProfileBox">
        {userKlassData.map((klass, i) => (
          <KlassCard klassData={klass} key={i} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import KlassCard from "../components/KlassCard";

function UserProfile({}) {
  // const [userProfileData, setUserProfileData] = useState({});
  // const [userKlassData, setUserKlassData] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`https://secret-brushlands-48608.herokuapp.com/klasses/${id}`)
  //     .then(function (response) {
  //       if (response.data) {
  //         setUserKlassData(response.data);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.warn("error", error);
  //     });
  // }, []);

  return (
    <div>
      <h1 className="Title">klasses.</h1>
      <h1> my profile </h1>
      <div className="ProfileBox">
        <h3> logged in as:</h3>
      </div>
      {/* {userKlassData.map((klass, i) => (
        <KlassCard klassData={klass} key={i} />
      ))} */}
    </div>
  );
}

export default UserProfile;

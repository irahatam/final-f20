import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import KlassCard from "../components/KlassCard";
import Footer from "../components/Footer";

function UserProfile() {
  const [userKlassData, setUserKlassData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://secret-brushlands-48608.herokuapp.com/profile/${id}`)
      // .get(`http://localhost:4000/profile/${id}`)
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
    <div className="pl-12 pr-12 BgC">
      <h1 className="Title">Posted by Me</h1>
      <div>
        {userKlassData.map((klass, i) => (
          <KlassCard klassData={klass} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;

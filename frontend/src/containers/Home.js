import React, { useState, useEffect } from "react";
import axios from "axios";
import KlassCard from "../components/KlassCard";
import Footer from "../components/Footer";

function Home() {
  const [klassAPIData, setKlassAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://secret-brushlands-48608.herokuapp.com/all-klasses`)
      .then(function (response) {
        if (response.data) {
          setKlassAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div className="pl-12 pr-12 BgC">
      <h1 className="Title">Klasses</h1>
      {klassAPIData.map((klass, i) => (
        <KlassCard klassData={klass} key={i} />
      ))}
      <Footer />
    </div>
  );
}

export default Home;

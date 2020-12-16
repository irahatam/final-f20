import React from "react";

function KlassCard({ klassData }) {
  return (
    <div className="KlassCard">
      <h3>{klassData.klassName}</h3>
      <p>
        Instructor: <br></br>
        {klassData.klassInstructor}
      </p>
      <p>
        Klass Date/Time: <br></br>
        {klassData.klassDate}, {klassData.klassTime}
      </p>
      <p>Klass Link: {klassData.klassLink}</p>
      <p>Klass Description: {klassData.klassDesc}</p>
    </div>
  );
}
export default KlassCard;

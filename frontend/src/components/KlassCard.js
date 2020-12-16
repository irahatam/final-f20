import React from "react";

function KlassCard({ klassData }) {
  return (
    <div className="KlassCard">
      <h3>{klassData.klassName}</h3>
      <p>
        Instructor:
        {klassData.klassInstructor}
      </p>
      <p>
        Klass Date/Time:
        {klassData.klassDate}, {klassData.klassTime}
      </p>
      <p>Klass Link: {klassData.klassLink}</p>
      <p>Klass Description: {klassData.klassDesc}</p>
    </div>
  );
}
export default KlassCard;

import React from "react";

function KlassCard({ klassData }) {
  return (
    <div className="KlassCard">
      <h3>{klassData.klassName}</h3>
      <p>
        Instructor:&nbsp;
        {klassData.klassInstructor}
      </p>
      <p>
        Klass Date/Time:&nbsp;
        {klassData.klassDate}, {klassData.klassTime}
      </p>
      <p>
        Klass Link:{" "}
        <a target="_blank" href={`${klassData.klassLink}`}>
          {klassData.klassLink}
        </a>
      </p>
      <p>Klass Description: {klassData.klassDesc}</p>
    </div>
  );
}
export default KlassCard;

import React from "react";

function KlassCard({ klassData }) {
  return (
    <div className="KlassCard">
      <p>Klass ID: {klassData.klassID}</p>
      <p>Klass Name: {klassData.klassName}</p>
      <p>Klass Instructor: {klassData.klassInstructor}</p>
      <p>Klass Date: {klassData.klassDate}</p>
      <p>Klass Time: {klassData.klassTime}</p>
      <p>Klass Link: {klassData.klassLink}</p>
    </div>
  );
}
export default KlassCard;

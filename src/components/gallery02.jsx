import React from "react";

function Main() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", backgroundColor: "#B77A51", padding: "20px",marginBottom: "100px", }}>
        <img src="./img/saiko-gallery01.jpg" />
        <img src="./img/saiko-gallery02.jpg" />
        <img src="./img/saiko-gallery03.jpg" />
        <img src="./img/saiko-gallery04.jpg" />
      </div>
    </>
  );
}

export default Main;

import React from "react";

function Main() {
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", backgroundColor: "#B77A51", padding: "20px" }}>
        <img src="./img/kurosaka-gallery01.jpg" />
        <img src="./img/kurosaka-gallery02.jpg" />
        <img src="./img/kurosaka-gallery03.jpg" />
        <img src="./img/kurosaka-gallery04.jpg" />
      </div>
    </>
  );
}

export default Main;

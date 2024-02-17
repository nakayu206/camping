import React from "react";

function Main() {
  return (
    <div>
      <div
        id="saiko"
        className="p-4 flex flex-col items-center relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("./img/saiko01.jpg")`, height: "100vh" }}
      >
        <div className="text-center">
          <h1 className="ml-12 mr-12 bottom-96 text-2xl md:text-4xl lg:text-5xl p-4 mb-4 absolute left-0 right-0 text-white bg-black bg-opacity-70">西湖 湖畔キャンプ場</h1>
        </div>
      </div>
      <div
        className="flex flex-col items-center relative"
        style={{ height: "100vh" }}
      >
        <div
          className="w-full bg-cover bg-center absolute top-0 left-0 right-0"
          style={{
            backgroundImage: `url("./img/saiko02.jpg")`,
            height: "100vh",
            zIndex: "-1",
          }}
        ></div>
        <div className="ml-4 mr-5 z-10 bottom-1 text-lg md:text-xl lg:text-2xl p-4 mb-4 absolute left-0 right-0 text-white bg-black bg-opacity-70">
          絶景のロケーション: 湖畔キャンプ場は、美しい自然環境に囲まれています
          朝日や夕日が湖面に映り込む様子や、星空が広がる夜景は圧巻です
          自然の息吹を感じながら、癒されます
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";

function Main() {
  return (
    <>
    <div id="saiko" className="p-4 mt-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">西湖 湖畔キャンプ場</h1>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src="./img/saiko01.jpg" alt="湖畔キャンプ場の画像1" className="w-full mb-4 md:mb-0" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src="./img/saiko02.jpg" alt="湖畔キャンプ場の画像2" className="w-full mb-4" />
          <p className="text-gray-800 text-lg leading-relaxed">
            絶景のロケーション: 湖畔キャンプ場は、美しい自然環境に囲まれています。
            朝日や夕日が湖面に映り込む様子や、星空が広がる夜景は圧巻です。
            自然の息吹を感じながら、癒されます
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;

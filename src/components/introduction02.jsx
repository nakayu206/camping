import React from "react";

function Main() {
  return (
    <div>
      <div
        id="saiko"
        className="p-4 flex flex-col items-center relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("./img/kurosaka01.jpg")`, height: "100vh" }}
      >
        <div className="text-center">
        <h1 className="ml-12 mr-12 bottom-96 text-2xl md:text-4xl lg:text-5xl p-4 mb-4 absolute left-0 right-0 text-white bg-black bg-opacity-70">黒坂オートキャンプ場</h1>
        </div>
      </div>
      <div
        className="flex flex-col items-center relative"
        style={{ height: "100vh" }}
      >
        <div
          className="w-full bg-cover bg-center absolute top-0 left-0 right-0"
          style={{
            backgroundImage: `url("./img/kurosaka02.jpg")`,
            height: "100vh",
            zIndex: "-1",
          }}
        ></div>
        <div className="ml-4 mr-5 z-10 bottom-1 text-lg md:text-xl lg:text-2xl p-4 mb-4 absolute left-0 right-0 text-white bg-black bg-opacity-70">
          山や森に囲まれた自然豊かな場所に位置しています。標高の高い場所にあり、澄んだ空気や豊かな緑を満喫できます
          ハイキングやトレッキングコースがあり、自然の中でのアクティビティを楽しむことができます
        </div>
      </div>
    </div>
  );
}

export default Main;

import React from "react";

function Main() {
  return (
    <div id="kurosaka" className="p-4 mt-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mt-20">黒坂オートキャンプ場</h1>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src="./img/kurosaka01.jpg" alt="湖畔キャンプ場の画像1" className="w-full mb-4 md:mb-0" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src="./img/kurosaka02.jpg" alt="湖畔キャンプ場の画像2" className="w-full mb-4" />
          <p className="text-gray-800 text-lg leading-relaxed">
          山や森に囲まれた自然豊かな場所に位置しています。標高の高い場所にあり、澄んだ空気や豊かな緑を満喫できます
          ハイキングやトレッキングコースがあり、自然の中でのアクティビティを楽しむことができます
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

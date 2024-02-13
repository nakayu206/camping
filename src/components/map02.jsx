import React from "react";

function Main() {
  return (
    <>
    <h1 className="text-3xl font-bold text-center mt-20 mb-10">料金案内</h1>
    <div className="flex flex-col items-center md:flex-row justify-center">
      <div className="mb-6 md:mb-0 md:mr-12 text-center">
        <img src="./img/kurosakamap.jpg" alt="地図" className="w-full md:w-auto md:max-w-xl" />
      </div>
      <div>
        <ul>
          <li className="mb-4">
            <span className="underline">チェックイン 13時〜16時</span> 
          </li>
          <li className="mb-4">
            <span className="underline">チェックアウト12時</span> 
          </li>
          <li className="mb-4">
            <span className="underline">レギュラー（大人2名含む）：3,000円</span> 
          </li>
          <li className="mb-4">
            <span className="underline">ミドル（大人2名含む）：4,000円</span> 
          </li>
          <li className="mb-4">
            <span className="underline">ハイ（大人2名含む）：5,000円</span> 
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Main;

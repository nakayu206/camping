import React from "react";

function Main() {
  return (
    <>
    <div className="pb-10"style={{ backgroundColor: "#D3F2BB" }}>
    <h1 className="text-3xl font-bold text-center mt-20 pt-14 mb-10">🏕️　料金</h1>
    <div className="flex flex-col items-center md:flex-row justify-center">
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
    </div>
    </>
  );
}

export default Main;

import React from "react";

function Main() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-20 mb-10">料金案内</h1>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <div className="mb-6 md:mb-0 md:mr-12 text-center">
          <img src="./img/saikomap.png" alt="地図" className="w-full md:w-auto md:max-w-lg" />
        </div>
        <div>
          <ul>
            <li className="mb-4">
              <span className="underline">チェックイン: 10:30〜（平日9:00〜）</span> 
            </li>
            <li className="mb-4">
              <span className="underline">チェックアウト: 10:30まで</span> 
            </li>
            <li className="mb-4">
              <span className="underline">大人: 1,500円 /1泊 /1名様</span> 
            </li>
            <li className="mb-4">
              <span className="underline">子供（３才～小学生）: 1,000円 /1泊 /1名様</span> 
            </li>
            <li className="mb-4">
              <span className="underline">車（１台）: 1,000円</span> 
            </li>
            <li className="mb-4">
              <span className="underline">バイク: 500円</span> 
            </li>
            <li className="mb-4">
              <span className="underline">キャンピングカー（大型・トレーラー）: 2,000円</span> 
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;

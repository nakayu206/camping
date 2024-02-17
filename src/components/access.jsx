import React from "react";

function Main() {
  return (
    <>
        <div className="pb-10"style={{ backgroundColor: "#D3F2BB" }}>
    <h1 className="text-3xl font-bold text-center mb-12">🚃 アクセス</h1>
    <div className="flex flex-col md:flex-row justify-center items-center mb-20">
      <div className="mb-6 md:mb-0 md:mr-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.977233398256!2d138.6971435757799!3d35.5048411726447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be0357758ea2b%3A0xe32ed211c3284a0c!2z6KW_5rmW44O75rmW55WU44Kt44Oj44Oz44OX5aC0!5e0!3m2!1sja!2sjp!4v1707546220898!5m2!1sja!2sjp"
          width="400" 
          height="450" 
          style={{border:0}}
          allowFullScreen="" 
          loading="lazy"
          title="map"
        ></iframe>
      </div>
      <div>
        <ul>
          <li className="mb-3">〒401-0332 山梨県南都留郡富士河口湖町西湖２０７−７</li>
          <li className="mb-3">最寄り電車: 河口湖駅</li>
          <li className="mb-3">最寄りバス: 富士急行バス 西湖東行き</li>
          <li className="mb-3">Tell: 0555-82-2858</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}

export default Main;

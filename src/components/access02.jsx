import React from "react";

function Main() {
  return (
    <>
        <div className="pb-10"style={{ backgroundColor: "#D3F2BB" }}>
    <h1 className="text-3xl font-bold text-center mb-20">🚃 アクセス</h1>
    <div className="flex flex-col md:flex-row justify-center items-center mb-20">
      <div className="mb-6 md:mb-0 md:mr-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.805011712386!2d138.63668487578335!3d35.583204272618985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be3563a2668ff%3A0x486750300d55a1f!2z6buS5Z2C44Kq44O844OI44Kt44Oj44Oz44OX5aC0!5e0!3m2!1sja!2sjp!4v1707559027803!5m2!1sja!2sjp" 
          width="400" 
          height="450" 
          style={{border:0}}
          allowFullScreen="" 
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <ul>
          <li className="mb-3">〒406-0852 山梨県笛吹市境川町大黒坂1070</li>
          <li className="mb-3">最寄り電車: 石和温泉駅</li>
          <li className="mb-3">最寄りバス: 富士急１５１１便</li>
          <li className="mb-3">Tell: 090-7186-8931</li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}

export default Main;

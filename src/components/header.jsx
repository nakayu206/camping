import React from "react";

export default function Header() {
    // ナビゲーションリンクをクリックした際にスクロールする関数
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="text-gray-900 fixed top-0 left-0 right-0 z-10000 border-b-2 border-gray-600" style={{ backgroundColor: "rgb(22, 163, 74)" }}>
            <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
                <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
                    <span><img src="./img/tento.png" className="w-24 md:w-40 h-auto"></img></span>
                </a>
                <nav className="md:ml-auto text-base">
                    <a href="#saiko" onClick={() => scrollToSection("saiko")} className="mr-5 hover:text-white duration-300">
                        西湖湖畔キャンプ場
                    </a>
                    <a href="#krosaka" onClick={() => scrollToSection("kurosaka")} className="mr-5 hover:text-white duration-300">
                        黒坂オートキャンプ場
                    </a>
                </nav>
            </div>
        </header>
    )
}

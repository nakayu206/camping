import React, { useState, useEffect } from "react";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            className={`text-gray-900 fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrollPosition > windowHeight * 0.95 ? "bg-green-500" : "bg-white" // 背景色を切り替え
            }`}
        >
            <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
                <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
                    <span><img src="./img/tento.png" className="w-24 md:w-40 h-auto"></img></span>
                </a>
                <nav className="md:ml-auto text-base">
                    <a href="#saiko" onClick={() => scrollToSection("saiko")} className="mr-5 hover:text-white duration-300">
                        西湖湖畔キャンプ
                    </a>
                    <a href="#krosaka" onClick={() => scrollToSection("kurosaka")} className="mr-5 hover:text-white duration-300">
                        黒坂オートキャンプ
                    </a>
                </nav>
            </div>
        </header>
    );
}

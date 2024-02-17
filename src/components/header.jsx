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
        <header
            className={`text-gray-900 fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
                scrollPosition > windowHeight * 0.95 ? "bg-green-500" : ""
            }`}
        >
            <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
                <div className="bg-green-500 p-1 border-4 mb-4 md:mb-0 md:mr-4">
                    <a href="#" className="block">
                        <img src="./img/tento.png" alt="Logo" className="w-24 md:w-40 h-auto border-4"></img>
                    </a>
                </div>
                <nav className="md:ml-auto text-base">
                    <a href="#saiko" onClick={() => scrollToSection("saiko")} className="mr-5 hover:text-white duration-300 bg-green-500 px-3 py-1 rounded-lg">
                        西湖湖畔キャンプ
                    </a>
                    <a href="#krosaka" onClick={() => scrollToSection("kurosaka")} className=" hover:text-white duration-300 bg-green-500 px-3 py-1 rounded-lg">
                        黒坂オートキャンプ
                    </a>
                </nav>
            </div>
        </header>
    );
}

import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-green-600 px-4 py-6">
                <div className="flex flex-col md:flex-row justify-center md:space-x-32">
                    <div className="md:mr-8 mb-6 md:mb-0">
                        <h3>西湖湖畔キャンプ場</h3>
                        <p>0555-82-2858</p>
                        <p>山梨県南都留郡富士河口湖町西湖２０７−７</p>
                        <p>チェックイン: 10:30〜（平日9:00〜）</p>
                        <p>チェックアウト: 10:30まで </p>
                    </div>
                    <div>
                        <h3>黒坂オートキャンプ場</h3>
                        <p>090-7186-8931</p>
                        <p>山梨県笛吹市境川町大黒坂1070</p>
                        <p>チェックイン 13時〜16時</p>
                        <p>チェックアウト12時 </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

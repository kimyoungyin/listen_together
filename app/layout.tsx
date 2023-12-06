import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Listen Together",
    description: "Generated by yin",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <header
                    className={`w-full bg-gray-800 text-white h-20 flex items-center px-4`}
                >
                    <h1 className={`text-xl`}>This is title</h1>
                </header>
                {children}
                <footer className="fixed bottom-0 border-t-2 border-rose-400 w-full h-12 flex justify-center items-center">
                    <p>This is fixed footer</p>
                </footer>
            </body>
        </html>
    );
}

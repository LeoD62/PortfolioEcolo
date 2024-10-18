"use client";

import { useState } from 'react';
import Image from 'next/image';
import './globals.css';
import Link from "next/link";
import { FlecheDroite, FlecheGauche, Mail } from './svgs';

export default function Page() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <div className="flex">
            <button
                onClick={() => setIsNavVisible(!isNavVisible)}
                className="p-2 bg-purple-500 text-white fixed bottom-4 left-4 z-10"
            >
                {isNavVisible ? <FlecheGauche className="w-6 h-6" /> : <FlecheDroite className="w-6 h-6" />}
            </button>
            {isNavVisible && (
                <nav className="w-1/5 h-screen bg-gray-800 text-white p-4 flex flex-col items-center">
                    <Image
                        src="/portrait.webp"
                        alt="Mon portrait"
                        width={200}
                        height={200}
                        className="rounded-full fixed-size mb-4"
                        loading={"lazy"}
                    />
                    <ul className="space-y-4 flex flex-col items-center">
                        <li><a href="#presentation" className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Présentation</a></li>
                        <li><a href="#section2" className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Section 2</a></li>
                        <li><a href="#section3" className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Section 3</a></li>
                    </ul>
                </nav>
            )}
            <div className={`flex-1 p-4 ${isNavVisible ? 'ml-1/5' : ''}`}>
                <div id="presentation" className="flex flex-col md:flex-row items-center m-4 gap-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Léo Denis</h1>
                        <h2 className="text-xl text-purple-200 mb-4">Etudiant en troisième année de BUT Informatique /
                            Développeur Windev en alternance</h2>
                        <p className="text-gray-700 mb-4">
                            Bienvenue sur mon portfolio ! Je suis étudiant en troisième année de BUT Informatique à
                            l'IUT de Lens et développeur Windev en alternance chez <Link href={"https://www.primever.com"}>
                            Primever</Link>. Je suis passionné par le développement, et je suis toujours à la recherche
                            de nouveaux projets à réaliser.
                        </p>
                        <a
                            href="mailto:leo.denis622@gmail.com"
                            className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max"
                        >
                            Me contacter < Mail className="w-6 h-6"></Mail>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
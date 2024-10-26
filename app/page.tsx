"use client";

import {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";
import {FlecheDroite, FlecheGauche, Mail, Python, Sql, Java, Php, Typescript, Linkedin, Github, Windev} from './svgs';
import './globals.css';

export default function Page() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <div className="flex">
            <button
                onClick={() => setIsNavVisible(!isNavVisible)}
                className="p-2 bg-purple-500 text-white fixed bottom-4 left-4 z-10"
            >
                {isNavVisible ? <FlecheGauche className="w-6 h-6"/> : <FlecheDroite className="w-6 h-6"/>}
            </button>
            {isNavVisible && (
                <nav className="w-1/5 h-screen bg-gray-800 text-white p-4 flex flex-col items-center">
                    <Image
                        src="/portrait.webp"
                        alt="Mon portrait"
                        width={200}
                        height={200}
                        className="rounded-full fixed-size mb-4"
                        loading="lazy"
                    />
                    <ul className="space-y-4 flex flex-col items-center">
                        <li><a href="#presentation"
                               className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Présentation</a>
                        </li>
                        <li><a href="#competences"
                               className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Compétences</a>
                        </li>
                        <li><a href="#section3"
                               className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max">Section
                            3</a></li>
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
                            l'IUT de Lens et développeur Windev en alternance chez <Link
                            href="https://www.primever.com">Primever</Link>. Je suis passionné par le développement, et
                            je suis toujours à la recherche de nouveaux projets à réaliser.
                        </p>
                        <Link
                            href="mailto:leo.denis622@gmail.com"
                            className="bg-purple-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max"
                        >
                            Me contacter <Mail className="w-6 h-6"/>
                        </Link>
                        <h2 className="mt-4 text-2xl font-bold mb-4">Présentation</h2>
                        <p className="text-gray-700 mb-4">
                            Le goût du développement est apparu chez moi lors des cours de technologie au collège. Bien
                            que ce n'était rien de vraiment poussé (Scratch), mon goût pour l'algorithmique s'est
                            développé durant cette période. C'est donc logiquement que j'ai effectué mon stage
                            d'observation de troisième au sein d'une ESN dans laquelle j'ai découvert les langages HTML
                            et CSS.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Au lycée, j'ai suivi un baccalauréat général avec les spécialités Mathématiques, NSI
                            (Numérique et Sciences Informatiques) et physique-chimie. J'ai arrêté cette dernière à la
                            fin de la terminale car les deux autres étaient trop importantes pour que je les arrête. En
                            effet, la NSI et les mathématiques me permettaient de développer mon algorithmie. J'ai
                            obtenu mon bacalauréat avec mention très bien en 2022.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Je suis aujourd'hui en deuxième année de BUT informatique à Lens. J'ai préféré cette
                            formation plutôt qu'une autre car elle me permet de continuer de développer mes compétences
                            tout en suivant une formation dans laquelle la pratique est plus présente que la théorique,
                            ce qui correspond plus à ma façon d'apprendre.
                        </p>
                    </div>
                </div>
                <div id="competences">
                    <h2 className="text-2xl font-bold mb-4">Compétences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded grid grid-cols-3 gap-4 justify-around">
                            <Python className="w-16 h-16"/>
                            <Sql className="w-16 h-16"/>
                            <Java className="w-16 h-16"/>
                            <Php className="w-16 h-16"/>
                            <Typescript className="w-16 h-16"/>
                            <Windev className="w-16 h-16"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
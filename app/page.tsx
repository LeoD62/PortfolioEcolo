"use client";

import {useState} from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
    FlecheDroite,
    FlecheGauche,
    Mail,
    Python,
    Sql,
    Java,
    Php,
    Typescript,
    Windev,
    Loupe,
    Cooperation,
    Puzzle,
    Montre,
    Sagesse,
    Strategie,
    Github,
    Linkedin
} from './svgs';
import './globals.css';
import {WebsiteCarbonBadge} from "react-websitecarbon-badge";
import Head from "next/head";

export default function Page() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    return (
        <div className="flex">
            <button
                onClick={() => setIsNavVisible(!isNavVisible)}
                className="p-2 bg-purple-500 text-white fixed bottom-4 left-4 z-10"
                aria-label={isNavVisible ? 'Fermer la navigation' : 'Ouvrir la navigation'}
            >
                {isNavVisible ? <FlecheGauche className="w-6 h-6"/> : <FlecheDroite className="w-6 h-6"/>}
            </button>
            {isNavVisible && (
                <nav
                    className="w-1/5 h-screen bg-gray-800 text-white p-4 flex flex-col items-center fixed top-0 left-0 mb-24">
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
                    </ul>
                    <div className="mt-auto flex flex-col items-center mb-16">
                        <p className="text-center text-sm text-gray-400 mt-4 mb-4">
                            Ce portfolio a été conçu de manière écoresponsable.
                        </p>
                        <WebsiteCarbonBadge url="https://portfolio-ecolo.vercel.app/" lang="fr" dark={true}
                                            co2="0.07"
                                            percentage="94"/>
                        <div id="ecoindex-badge" data-theme="dark"></div>
                        <a href="https://bff.ecoindex.fr/redirect/?url=https://portfolio-ecolo.vercel.app/"
                           target="_blank">
                            <img
                                src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://portfolio-ecolo.vercel.app/"
                                alt="Ecoindex Badge"/>
                        </a>
                        <div className="flex space-x-4 mt-4">
                            <Link href="https://github.com/LeoD62" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/léo-denis/" target="_blank"
                                  rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6"/>
                            </Link>
                        </div>
                    </div>
                </nav>
            )}
            <div className={`flex-1 p-4 transition-all ${isNavVisible ? 'ml-20' : ''}`}>
                <div id="presentation" className="flex flex-col md:flex-row items-center m-4 gap-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Léo Denis</h1>
                        <h2 className="text-xl text-purple-200 mb-4">Etudiant en troisième année de BUT Informatique
                            /
                            Développeur Windev en alternance</h2>
                        <p className="text-gray-700 mb-4">
                            Bienvenue sur mon portfolio ! Je suis étudiant en troisième année de BUT Informatique à
                            l&apos;IUT de Lens et développeur Windev en alternance chez <Link
                            href="https://www.primever.com">Primever</Link>. Je suis passionné par le développement,
                            et
                            je suis toujours à la recherche de nouveaux projets à réaliser.
                        </p>
                        <Link
                            href="mailto:leo.denis622@gmail.com"
                            className="bg-fuchsia-500 text-black px-4 py-2 rounded hover:bg-purple-600 transition-colors flex items-center gap-2 w-max"
                        >
                            Me contacter <Mail className="w-6 h-6"/>
                        </Link>
                        <h2 className="mt-4 text-2xl font-bold mb-4">Présentation</h2>
                        <p className="text-gray-700 mb-4">
                            Le goût du développement est apparu chez moi lors des cours de technologie au collège.
                            Bien
                            que ce n&apos;était rien de vraiment poussé (Scratch), mon goût pour
                            l&apos;algorithmique
                            s&apos;est
                            développé durant cette période. C&apos;est donc logiquement que j&apos;ai effectué mon
                            stage
                            d&apos;observation de troisième au sein d&apos;une ESN dans laquelle j&apos;ai découvert
                            les
                            langages HTML
                            et CSS.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Au lycée, j&apos;ai suivi un baccalauréat général avec les spécialités Mathématiques,
                            NSI
                            (Numérique et Sciences Informatiques) et physique-chimie. J&apos;ai arrêté cette
                            dernière à
                            la
                            fin de la terminale car les deux autres étaient trop importantes pour que je les arrête.
                            En
                            effet, la NSI et les mathématiques me permettaient de développer mon algorithmie.
                            J&apos;ai
                            obtenu mon bacalauréat avec mention très bien en 2022.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Je suis aujourd&apos;hui en troisième année de BUT informatique à Lens. J&apos;ai
                            préféré
                            cette
                            formation plutôt qu&apos;une autre car elle me permet de continuer de développer mes
                            compétences
                            tout en suivant une formation dans laquelle la pratique est plus présente que la
                            théorique,
                            ce qui correspond plus à ma façon d&apos;apprendre.
                        </p>
                        <p className="text-gray-700 mb-4">
                            En parallèle de mes études, je travaille en alternance chez Primever en tant que
                            développeur
                            Windev depuis mars 2024. J&apos;ai choisi cette entreprise car elle me permet de
                            développer
                            mes compétences dans un langage que je ne connaissais pas du tout, et de découvrir le
                            monde
                            de l&apos;entreprise.
                        </p>
                    </div>
                </div>
                <div id="competences">
                    <h2 className="text-2xl font-bold mb-4">Compétences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Langages</h3>
                            <div className="bg-gray-800 p-4 rounded grid grid-cols-3 gap-4 justify-around">
                                <div className="flex flex-col items-center">
                                    <Python className="w-16 h-16"/>
                                    <span className="text-white mt-2">Python</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Sql className="w-16 h-16"/>
                                    <span className="text-white mt-2">SQL</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Java className="w-16 h-16"/>
                                    <span className="text-white mt-2">Java</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Php className="w-16 h-16"/>
                                    <span className="text-white mt-2">PHP</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Typescript className="w-16 h-16"/>
                                    <span className="text-white mt-2">Typescript</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Windev className="w-16 h-16"/>
                                    <span className="text-white mt-2">Windev</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Savoir-être</h3>
                            <div className="bg-gray-800 p-4 rounded grid grid-cols-3 gap-4 justify-around">
                                <div className="flex flex-col items-center">
                                    <Loupe className="w-16 h-16"/>
                                    <span className="text-white mt-2">Curieux</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Cooperation className="w-16 h-16"/>
                                    <span className="text-white mt-2">Coopération</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Strategie className="w-16 h-16"/>
                                    <span className="text-white mt-2">Stratégique</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Puzzle className="w-16 h-16"/>
                                    <span className="text-white mt-2">Résolution de problèmes</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Montre className="w-16 h-16"/>
                                    <span className="text-white mt-2">Gestion du temps</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Sagesse className="w-16 h-16"/>
                                    <span className="text-white mt-2">Esprit critique</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
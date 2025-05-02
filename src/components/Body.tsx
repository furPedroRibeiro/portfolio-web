import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from "react";

import reactIcon from '../../public/assets/icons/tecnologias/react-icon.png'
import typescriptIcon from '../../public/assets/icons/tecnologias/ts-icon.png'
import javascriptIcon from '../../public/assets/icons/tecnologias/js-icon.png'
import tailwindIcon from '../../public/assets/icons/tecnologias/tailwind-icon.png'
import htmlIcon from '../../public/assets/icons/tecnologias/html-icon.png'
import cssIcon from '../../public/assets/icons/tecnologias/css-icon.png'
import githubIcon from '../../public/assets/icons/tecnologias/github-icon-lg.png'
import arslibriIcon from '../../public/assets/icons/projetos/arslibri-icon.png'
import tabuadaIcon from '../../public/assets/icons/projetos/tabuada-icon.png'
import figmaIcon from '../../public/assets/icons/tecnologias/figma-icon.png'
import cIcon from '../../public/assets/icons/tecnologias/c-icon.png'
import parisIcon from '../../public/assets/icons/projetos/paris2024.png'

import { CardProjetos, CardTecnologias } from "./cards/Cards";

export function Body(){
    useEffect(() => {
        AOS.init()
    })
    return(   
        <div className='w-full'>
            <section className="flex flex-col items-center justify-center py-20 px-6 bg-primary">
                <h1 className='font-black text-3xl text-[#1e1e1e] mb-10'>Tecnologias</h1>
                    <div 
                    className="flex items-center justify-center flex-wrap gap-8"
                    >
                        <CardTecnologias
                            aUrl='https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev'
                            iconCard={reactIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://www.typescriptlang.org/'
                            iconCard={typescriptIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
                            iconCard={javascriptIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://tailwindcss.com/'
                            iconCard={tailwindIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
                            iconCard={htmlIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
                            iconCard={cssIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://github.com/'
                            iconCard={githubIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://figma.com/'
                            iconCard={figmaIcon}
                            title=''
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='#'
                            iconCard={cIcon}
                            title=''
                        ></CardTecnologias>
                    </div>
            </section>
            <section className="flex flex-col items-center justify-center py-20 px-6 bg-[#1e1e1e] gap-10">
                <h1 className='font-black text-3xl text-primary mb-10'>Projetos</h1>
                <div className='flex items-center flex-wrap justify-center gap-x-12 gap-y-10'>
                    <CardProjetos
                        aUrl='https://tabuadamemorizer.vercel.app'
                        iconCard={tabuadaIcon}
                        title=''
                        desc=''
                    >
                    </CardProjetos>
                    <CardProjetos
                        aUrl='https://quadrodemedalhasparis2024.vercel.app/'
                        iconCard={parisIcon}
                        title=''
                        desc=''
                    >
                    </CardProjetos>
                    <CardProjetos
                        aUrl='https://notesbyaudio.vercel.app/'
                        iconCard={"https://notesbyaudio.vercel.app/assets/logo-nlw-expert-8i9AeB0n.svg"}
                        title=''
                        desc=''
                    >
                    </CardProjetos>
                    <CardProjetos
                        aUrl='https://cardapiolatavola.vercel.app/'
                        iconCard={"https://cardapiolatavola.vercel.app/assets/logo-D5BrpOxG.png"}
                        title=''
                        desc=''
                    ></CardProjetos>
                    <CardProjetos
                        aUrl='https://instagram.com/ars.libri'
                        iconCard={arslibriIcon}
                        title=''
                        desc=''
                    ></CardProjetos>
                </div>
            </section>
        </div>
    );
}
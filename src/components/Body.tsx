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

import { CardProjetos, CardTecnologias } from "./cards/Cards";

export function Body(){
    useEffect(() => {
        AOS.init()
    })
    return(   
        <div className='w-full'>
            <section className="flex flex-col items-center justify-center py-32 px-6 bg-primary">
                <h1 className='font-black text-3xl text-secondary mb-10'>Tecnologias</h1>
                    <div 
                    className="flex items-center justify-center flex-wrap gap-8"
                    >
                        <CardTecnologias
                            aUrl='https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev'
                            iconCard={reactIcon}
                            title='React'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://www.typescriptlang.org/'
                            iconCard={typescriptIcon}
                            title='Typescript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
                            iconCard={javascriptIcon}
                            title='Javascript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://tailwindcss.com/'
                            iconCard={tailwindIcon}
                            title='Tailwind'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
                            iconCard={htmlIcon}
                            title='HTML'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
                            iconCard={cssIcon}
                            title='CSS'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://github.com/'
                            iconCard={githubIcon}
                            title='Github'
                        ></CardTecnologias>
                    </div>
            </section>
            <section className="flex flex-col items-center justify-center py-32 px-6 bg-secondary">
                <h1 className='font-black text-3xl text-primary mb-10'>Projetos</h1>
                <div className='flex items-center justify-center gap-8' data-aos="fade-right">
                    <CardProjetos
                        aUrl='https://arslibri.com.br'
                        iconCard={arslibriIcon}
                        title='Ars Libri'
                        desc='Ars Libri - Cultura e acessibilidade é um projeto que nasceu de um TCC e por interesse pessoal da equipe continuou sendo pensado e desenvolvido. Nele, os usuários podem ter acesso a cultura de uma maneira diferente e lúdica, além disso ainda disponibiliza lugar de fala para artistas e permite a exploração da história através do tempo.'
                    >
                    </CardProjetos>
                </div>
            </section>
        </div>
    );
}
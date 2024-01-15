import { Typewriter } from "react-simple-typewriter"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from "react";

import { Hyperlink } from "./reset/Hyperlink";

import gitHubIconSm from '../../public/assets/icons/tecnologias/github-icon-sm.png'
import linkedinIconSm from '../../public/assets/icons/tecnologias/linkedin-icon-sm.png'
import instagramIconSm from '../../public/assets/icons/tecnologias/instagram-icon-sm.png'
import perfilPicture from '../../public/assets/perfil-picture.jpeg'
import hamletImg from '../../public/assets/hamlet.png'

export function Header(){
    useEffect(() => {
        AOS.init()
    })
    return(
        <section 
            className="
                w-full
                max-[900px]:px-[5%]
                h-auto
                flex flex-row items-center justify-center
                flex-wrap
                xl:items-center
                gap-40
                bg-secondary
            "
            aria-label="Cabeçalho sobre mim" 
            data-aos="fade-right"
        >
                <div className="
                    h-screen
                    flex flex-col items-center justify-center
                ">
                    <div className='flex flex-wrap-reverse items-center justify-center h-auto gap-8 py-7
                    '>
                        <img 
                            className='object-cover rounded-full aspect-square' 
                            src={perfilPicture} 
                            alt="" 
                            width={144}
                        />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-black text-2xl text-primary'>
                                Pedro Luis de Alencar Ribeiro
                            </h1>
                            <p className='font-bold italic text-lg text-terciary'>
                                <Typewriter
                                    words={['Desenvolvedor front-end', 'Idealizador do projeto Ars Libri', 'Designer']}
                                    typeSpeed={90}
                                    deleteSpeed={30}
                                    delaySpeed={1800}
                                    loop
                                    cursor
                                    cursorBlinking={true}
                                ></Typewriter>
                            </p>
                            <div className="flex flex-row gap-1 items-center h-[35px]">
                                <a 
                                    href="https://github.com/furPedroRibeiro"
                                    className="text-primary group"
                                >
                                    <img className="group-hover:w-10 transition-all duration-400" src={gitHubIconSm} alt="" width={30} />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/pedro-ribeiro-abaa0b293"
                                    className="text-primary group"
                                >
                                    <img className="group-hover:w-10 transition-all duration-400" src={linkedinIconSm} alt="" width={30} />
                                </a>
                                <a 
                                    href="https://instagram.com/pedrol.js"
                                    className="text-primary group"
                                >
                                    <img className="group-hover:w-10 transition-all duration-400" src={instagramIconSm} alt="" width={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='
                        lg:w-[500px] md:w-[600px] text-justify
                        xl:w-[650px]
                        font-medium text-lg text-primary'
                    >
                        Formado em Desenvolvimento de Sistemas(2023) integrado ao ensino médio na 
                        <Hyperlink
                            aUrl='https://etecperuibe.com.br/'
                            target='_blank'
                            content=' Etec de Peruíbe'
                        />, atuo como desenvolvedor web, designer e idealizador do projeto 
                        <Hyperlink
                            aUrl='https://instagram.com/ars.libri'
                            target="_blank"
                            content=" Ars Libri"
                        />.
                    </p>
                </div>
                <div
                    className="
                        h-screen
                        flex items-center justify-center
                    "
                >
                    <img
                        className="max-[400px]:w-[100%]" 
                        src={hamletImg}
                        alt="" 
                        width={400}
                        data-aos="fade-right"
                    />
                </div>
        </section>
    );
}
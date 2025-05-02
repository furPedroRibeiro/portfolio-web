import { Typewriter } from "react-simple-typewriter"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from "react"

import { Hyperlink } from "./reset/Hyperlink"

import gitHubIconSm from '../../public/assets/icons/tecnologias/github-icon-sm.png'
import linkedinIconSm from '../../public/assets/icons/tecnologias/linkedin-icon-sm.png'
import instagramIconSm from '../../public/assets/icons/tecnologias/instagram-icon-sm.png'
import perfilPicture2 from '../../public/assets/ft_perfil_1.jpg'

export function Header(){
    useEffect(() => {
        AOS.init()
    })
    return(
        <section 
            className="
                w-full
                max-[900px]:px-[5%]
                h-screen
                flex flex-row items-center justify-center
                flex-wrap
                xl:items-center
                gap-20
                bg-[#1e1e1e]
                
            "
            aria-label="Cabeçalho sobre mim" 
            data-aos="fade-right"
        >
                <div className="
                    h-auto
                    flex flex-col items-center justify-center w-auto
                    
                ">
                    <div className='flex flex-wrap-reverse items-center justify-center h-auto gap-8 py-7
                    '>
                        <img 
                            className='object-cover rounded-[10px] aspect-square' 
                            src={perfilPicture2} 
                            alt="" 
                            width={144}
                        />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-2xl text-primary'>
                                Pedro Luis de Alencar Ribeiro
                            </h1>
                            <p className='font-semibold italic text-lg text-terciary'>
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
                            <div className="flex flex-row gap-2 items-center h-[35px]">
                                <a 
                                    href="https://github.com/furPedroRibeiro"
                                    className="text-primary group" target="_blank"
                                >
                                    <img className="group-hover:w-[27px] transition-all duration-400" src={gitHubIconSm} alt="" width={22} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/pedro-ribeiro-abaa0b293"
                                    className="text-primary group" target="_blank"
                                >
                                    <img className="group-hover:w-[27px] transition-all duration-400" src={linkedinIconSm} alt="" width={22} />
                                </a>
                                <a 
                                    href="https://instagram.com/pedrol.js"
                                    className="text-primary group" target="_blank"
                                >
                                    <img className="group-hover:w-[27px] transition-all duration-400" src={instagramIconSm} alt="" width={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="
                        h-auto
                        flex items-center justify-center
                        
                        mx-[25px]
                        w-auto
                        lg:w-[500px]
                        xl:w-[500px]
                    "
                >
                    <p className='
                        font-medium text-md tracking-[1px] text-primary'
                    >
                        Formado em Desenvolvimento de Sistemas(2023) integrado ao ensino médio na 
                        <Hyperlink
                            aUrl='https://etecperuibe.com.br/'
                            target='_blank'
                            content=' Etec de Peruíbe'
                        />, posso atuar como desenvolvedor web, designer e idealizar projetos como o TCC desenvolvido no curso técnico. Além disso, estou no terceiro semestre de Engenharia de computação na USP São Carlos (<Hyperlink
                            aUrl='https://eesc.usp.br/'
                            target='_blank'
                            content='EESC'
                        /> e <Hyperlink
                        aUrl='https://www.icmc.usp.br/'
                        target='_blank'
                        content='ICMC'
                    />).
                    </p>
                </div>
        </section>
    );
}
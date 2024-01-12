import { Hyperlink } from "./reset/Hyperlink";

export function Header(){
    return(
        <section className="mx-6" aria-label="Cabeçalho sobre mim">
            <div className='flex flex-wrap-reverse items-center justify-center h-auto gap-8 py-12'>
                <div className="h-36">
                    <img 
                        className='object-cover rounded-full aspect-square' 
                        src="https://arslibri.com.br/assets/home/sobre-nos-fotos/pedro.webp" 
                        alt="" 
                        width={144}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-black text-2xl text-terciary'>
                        Pedro Luis de Alencar Ribeiro
                    </h1>
                    <p className='font-semibold italic text-lg text-primary'>
                        Desenvolvedor front-end
                    </p>
                    <div className="flex flex-row gap-1">
                        <a 
                            href="https://github.com/furPedroRibeiro"
                            className="text-primary"
                        >
                            <img src="/../../public/assets/icons/tecnologias/github-icon-sm.png" alt="" width={30} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pedro-ribeiro-abaa0b293"
                            className="text-primary"
                        >
                            <img src="/../../public/assets/icons/tecnologias/linkedin-icon-sm.png" alt="" width={30} />
                        </a>
                        <a 
                            href="https://instagram.com/pedrol.js"
                            className="text-primary"
                        >
                            <img src="/../../public/assets/icons/tecnologias/instagram-icon-sm.png" alt="" width={30} />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-center font-medium text-lg text-primary'>
                Formado em Desenvolvimento de Sistemas integrado ao ensino médio na 
                <Hyperlink
                    aUrl='https://etecperuibe.com.br/'
                    target='_blank'
                    content=' Etec de Peruíbe'
                />
            </p>
        </section>
    );
}
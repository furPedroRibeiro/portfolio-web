import { CardProjetos, CardTecnologias } from "./cards/Cards";
import { TitleSection } from "./reset/TitleSection";

export function Body(){
    return(
        <div>
            <section className="flex flex-col items-center justify-center mb-10">
                <TitleSection
                title='Tecnologias'
                />
                    <div className="flex items-center justify-center flex-wrap gap-8">
                        <CardTecnologias
                            aUrl='https://pt-br.react.dev/blog/2023/03/16/introducing-react-dev'
                            iconCard='../../public/assets/icons/tecnologias/react-icon.png'
                            title='React'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://www.typescriptlang.org/'
                            iconCard='../../public/assets/icons/tecnologias/ts-icon.png'
                            title='Typescript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
                            iconCard='../../public/assets/icons/tecnologias/js-icon.png'
                            title='Javascript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://tailwindcss.com/'
                            iconCard='../../public/assets/icons/tecnologias/tailwind-icon.png'
                            title='Tailwind'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
                            iconCard='../../public/assets/icons/tecnologias/html-icon.png'
                            title='HTML'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
                            iconCard='../../public/assets/icons/tecnologias/css-icon.png'
                            title='CSS'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://github.com/'
                            iconCard='../../public/assets/icons/tecnologias/github-icon.png'
                            title='Github'
                        ></CardTecnologias>
                    </div>
            </section>
            <section className="flex flex-col items-center justify-center mb-10">
                <TitleSection
                    title='Projetos'
                ></TitleSection>
                <div className='flex items-center justify-center'>
                    <CardProjetos
                        aUrl='https://arslibri.com.br'
                        iconCard='../../public/assets/icons/projetos/arslibri-icon.png'
                        title='Ars Libri'
                        desc='Ars Libri - Cultura e acessibilidade é um projeto que nasceu de um TCC e por interesse pessoal da equipe continuou sendo pensado e desenvolvido. Nele, os usuários podem ter acesso a cultura de uma maneira diferente e lúdica, além disso ainda disponibiliza lugar de fala para artistas e permite a exploração da história através do tempo.'
                    >
                    </CardProjetos>
                </div>
            </section>
        </div>
    );
}
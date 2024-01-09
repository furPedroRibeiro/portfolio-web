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
                            iconCard='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                            title='React'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://www.typescriptlang.org/'
                            iconCard='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
                            title='Typescript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
                            iconCard='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
                            title='Javascript'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://tailwindcss.com/'
                            iconCard='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'
                            title='Tailwind'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/HTML'
                            iconCard='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
                            title='HTML'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
                            iconCard='https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png'
                            title='CSS'
                        ></CardTecnologias>
                        <CardTecnologias
                            aUrl='https://github.com/'
                            iconCard='https://cdn.icon-icons.com/icons2/2429/PNG/512/github_logo_icon_147285.png'
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
                        iconCard='https://arslibri.com.br/assets/home/header/logo-ars-libri-modern-golden-whiteback-removebg-preview%201.svg'
                        title='Ars Libri'
                        desc='Ars Libri - Cultura e acessibilidade é um projeto que nasceu de um TCC e por interesse pessoal da equipe continuou sendo pensado e desenvolvido. Nele, os usuários podem ter acesso a cultura de uma maneira diferente e lúdica, além disso ainda disponibiliza lugar de fala para artistas e permite a exploração da história através do tempo.'
                    >
                    </CardProjetos>
                </div>
            </section>
        </div>
    );
}
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

interface CardTecnologias{
    aUrl: string;
    iconCard: string;
    title: string;
}
export function CardTecnologias(props: CardTecnologias){
    useEffect(() => {
        AOS.init()
    })
    return(
        <a 
        href={props.aUrl} 
        target='_blank'
        className='
            cursor-pointer rounded-xl
            transition-all duration-700
            hover:translate-y-4
            flex flex-col items-center justify-center 
            px-12 gap-y-6 py-10
            '
            
            data-aos="fade-left"
        >
            <div className='flex items-center'>
                <img className='h-[140px] w-[140px] object-contain transition-all duration-700
                    group-hover:translate-y-2' src={props.iconCard} alt=""/>
            </div>
            <p className='font-semibold text-xl text-secondary'>
                {props.title}
            </p>
        </a>
    );
}

interface CardProjetos{
    aUrl: string;
    iconCard: string;
    title: string;
    desc: string;
}

export function CardProjetos(props: CardProjetos){
    return(
        <a  href={props.aUrl}
            target='_blank'
            className='
            flex flex-col items-center justify-center
            py-10 px-10 w-50 h-50
            cursor-pointer
            transition-color duration-700
            rounded-xl
            bg-primary bg-opacity-100
            '
            data-aos="fade-right"
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    "
            >
                <img 
                className='
                    object-contain
                    rounded-full
                    h-[160px]
                ' 
                src={props.iconCard} 
                alt=""
                width={160}
                 />
                <p 
                className='font-semibold text-xl text-secondary'>
                    {props.title}
                </p>
            </div>
            <p 
                className="
                    font-medium text-lg text-center 
                    text-secondary 
                    transition-all
                    duration-700
                ">
                    {props.desc}
            </p>
        </a>
    );
}
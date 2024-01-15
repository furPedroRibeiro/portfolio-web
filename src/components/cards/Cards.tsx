interface CardTecnologias{
    aUrl: string;
    iconCard: string;
    title: string;
}
export function CardTecnologias(props: CardTecnologias){
    return(
        <a 
        href={props.aUrl} 
        target='_blank' 
        className='
            flex flex-col items-center justify-center 
            px-6 gap-4 py-10 
            cursor-pointer rounded-xl
            
            border border-primary
            hover:border-secondary
            transition-colors duration-700
        '>
            <div className='h-40 flex items-center'>
                <img src={props.iconCard} alt="" width={160}/>
            </div>
            <p className='font-bold text-xl text-secondary'>
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
            gap-3 py-10 px-6 w-80
            cursor-pointer
            transition-color duration-700
            
            '
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-1
                    "
            >
                <img 
                className='
                    rounded-full
                ' 
                src={props.iconCard} 
                alt="" 
                width={160} />
                <p 
                className='font-bold text-xl text-primary'>
                    {props.title}
                </p>
            </div>
            <p 
                className="
                    font-medium text-lg text-center 
                    text-primary 
                    transition-all
                    duration-700
                ">
                    {props.desc}
                    </p>
                <button 
                className="
                    group
                    z-10
                    mt-3 py-3 px-4
                    rounded-lg border border-primary
                    text-primary
                    font-medium
                    hover:bg-primary
                    hover:text-secondary
                    hover:font-bold
                    transition-color
                    duration-700
                ">
                    Ver mais
                </button>
        </a>
    );
}
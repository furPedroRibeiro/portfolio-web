interface CardTecnologias{
    aUrl: string;
    iconCard: string;
    title: string;
}
export function CardTecnologias(props: CardTecnologias){
    return(
        <a href={props.aUrl} target='_blank' className='
        flex flex-col items-center justify-center 
        px-6 gap-3 py-10 
        cursor-pointer rounded-xl
        hover:bg-secondary hover:bg-opacity-30 
        transition-color duration-700
        '>
            <div className='h-40 flex items-center'>
                <img src={props.iconCard} alt="" width={160}/>
            </div>
            <p className='font-bold text-xl text-primary'>{props.title}</p>
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
            cursor-pointe rounded-xl
            hover:bg-secondary hover:bg-opacity-30
            transition-color duration-700'
        >
            <div>
                <img className='rounded-full' src={props.iconCard} alt="" width={160} />
            </div>
            <p className='font-bold text-xl text-primary'>{props.title}</p>
            <p className="font-medium text-lg text-center text-primary">{props.desc}</p>
        </a>
    );
}
interface Title{
    title: string;
}

export function TitleSection(props: Title){
    return(
        <h1 className='font-black text-3xl text-terciary mb-10'>{props.title}</h1>
    );
}
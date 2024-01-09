interface Hyperlink{
    aUrl: string;
    target: string;
    content: string;
}

export function Hyperlink(props: Hyperlink){
    return(
        <a href={props.aUrl} target={props.target} rel="noopener noreferrer" className="text-hyperlink font-semibold italic">{props.content}</a>
    );
}
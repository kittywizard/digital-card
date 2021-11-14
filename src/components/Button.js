export default function Button(props) {
    return (
        <button className={props.cls}>{props.url} {props.name}</button>
    )
}
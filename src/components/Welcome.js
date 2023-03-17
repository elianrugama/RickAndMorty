export default function Welcome(props) {
    const {message, name} = props;
    return (
    <div>
        <p>hola desde components Welcome</p>
        <p>{message}{name}</p>
    </div>
);

    

}
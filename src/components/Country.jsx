import Medal from "./Medal"

export default function Country(props) {
    return (
        <div className="country">
            <header className="header">
                <h3>{props.country.name}</h3>
                <button className="btn" onClick={() => props.onDelete(props.country.id)}>X</button>
            </header>
            {props.medals.current.map((medal) => (
                <Medal key={medal.id} name={medal.name} />
            ))}
        </div>
    )
}
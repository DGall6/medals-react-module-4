import Medal from "./Medal"

export default function Country(props) {

    const countryTotal = props.country.gold + props.country.silver + props.country.bronze;

    return (
        <div className="country">
            <header className="header">
                <div>
                    <h3>{props.country.name}</h3>
                    <p>Medal Count: {countryTotal}</p>
                </div>
                <button className="btn" onClick={() => props.onDelete(props.country.id)}>X</button>
            </header>
            {props.medals.current.map((medal) => (
                <Medal key={medal.id} country={props.country} name={medal.name} handleIncrement={props.handleIncrement} handleDecrement={props.handleDecrement} />
            ))}
        </div>
    )
}
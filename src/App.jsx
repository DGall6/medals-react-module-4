import { useState, useRef } from "react";
import Country from "./components/country";
import "./App.css";
import NewCountry from "./components/NewCountry";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
    { id: 1, name: "Gold" },
    { id: 2, name: "Silver" },
    { id: 3, name: "Bronze" },
  ]);

  function handleAdd(name) {
    console.log(name);
    const id = countries.length === 0 ? 1 : Math.max(...countries.map((country) => country.id)) + 1;
    setCountries(countries.concat({id: id, name: name, gold: 0, silver: 0, bronze: 0}));
  }

  function handleDelete(countryId) {
    setCountries(countries.filter(c => c.id !== countryId));
  }

  function handleIncrement(countryId, medal) {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] += 1;
    setCountries(countriesMutable);
  }

  function handleDecrement(countryId, medal) {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] -= 1;
    setCountries(countriesMutable);
  }

  function getTotalMedalCount() {
    const totalGold = countries.reduce((a, b) => a + b.gold, 0);
    const totalSilver = countries.reduce((a, b) => a + b.silver, 0);
    const totalBronze = countries.reduce((a, b) => a + b.bronze, 0);
    return totalGold + totalSilver + totalBronze;
  }

  const totalMedalCount = getTotalMedalCount()

  return (
    <div>
      <header>
        <h2>Total Medal Count: {totalMedalCount}</h2>
      </header>
      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals} onDelete={handleDelete} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      ))}
      <NewCountry onAdd={handleAdd} />
    </div>
  );
}

export default App;
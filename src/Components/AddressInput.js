import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddressInput() {
  const [search, setInput] = useState("");
  const [address, setAddress] = useState([]);


  useEffect(() => {
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${address}type=housenumber&autocomplete=1`)
      .then(res => {
          console.log("ici", res.data.features);
          address.push(...res.data.features);
      })
      .catch(err => {
        console.log(err);
      });
    setAddress(address);
  }, []);


  const handleChange = e => {
    setInput(e.target.value);
    setAddress(search);
  }

  const handleClick = e => {
    
  }

  return (
    <div>
      <input type="text" value={search} onChange={handleChange}/>
      <button onClick={handleClick}>Afficher le périmètre</button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import MapsContainer from "./MapsContainer";


export default function AddressInput() {
  const [search, setInput] = useState("");
  const [address, setAddress] = useState([]);

  const [clickedaddress, setclickedAddress] = useState(null);

  const [lat, setlat] = useState("48.866667");
  const [lng, setlng] = useState("2.333333");

  const getAddress = async () => {
    const inputRes = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${search}&type=housenumber&autocomplete=1`);
    // address.push(...inputRes.data.features);
    setAddress(inputRes.data.features);
    console.log("yoooo", address);
  }

  useEffect(() => {
    setAddress();
  }, []);

//   useEffect(() => {
//     axios
//       .get(`https://api-adresse.data.gouv.fr/search/?q=${search}type=housenumber`)
//       .then(res => {
//           console.log("ici", res.data.features);
//           address.push(...res.data.features);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//       setAddress(address);
//     console.log("blabla search type of", address);
//   }, []);


  const handleChange = e => {
    setInput(e.target.value);
    getAddress();
    // let filteredAdress = address.filter(add => add.properties.label.toUpperCase().match(search.toUpperCase()))
    // setSearchedAddress(filteredAdress);
    // console.log("youhou", address);
  }

  const handleClick = () => {
    // setclickedAddress(address[0]);
    // console.log("lalla", clickedaddress);
    setlat(address[0].geometry.coordinates[1]);
    setlng(address[0].geometry.coordinates[0]);
  }

  return (
    //   address ? (
    <div>
      <input type="text" value={search} onChange={handleChange}/>
      <button onClick={handleClick}>Afficher le périmètre</button>
      <div className="MapsContainer">
      {address && <MapsContainer clickedaddress={address[0]} lat={lat} lng={lng} />}
      </div>
    </div>
    //   ) : (
    //   <p>"No address yet"</p>
    // )
  );
}

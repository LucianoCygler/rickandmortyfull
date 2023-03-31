import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
function App() {
  const [characters, setCharacters] = useState([]);
  //   function onSearch(character) {
  //     fetch(`https://rickandmortyapi.com/api/character/${character}`)
  //        .then((response) => response.json())
  //        .then((data) => F{
  //           if (data.name) {
  //              setCharacters((oldChars) => [...oldChars, data]);
  //           } else {
  //              window.alert('No hay personajes con ese ID');
  //           }
  //        });
  //  }

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    // const key = "39b3b6c58947.2870a559deab4661954f" ?key=${key}

    if (characters.find((char) => char.id === id)) {
      return alert("personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          //  setCharacters([...characters,data])
        } else {
          alert("No hay personaje con ese id o ya se agregó");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id)); //filter no modifica array original, retorna uno nuevo
  };
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const email = "lucianocygler@outlook.com";
  const password = "asd123";

  const navigate = useNavigate();
  const login = (userData) => {
    if (userData.username === email && userData.password === password) {
      setAccess(true);

      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Detail.module.css";
import axios from "axios";
const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});




    useEffect(() => {
        const URL_BASE = "http://localhost:3001/rickandmorty";
        //const key = "39b3b6c58947.2870a559deab4661954f"
        axios(`${URL_BASE}/detail/${detailId}`)
        .then((response) =>{
            setCharacter(response.data)
        
          }  )
        
        }, []);
    

return (
    <div>
    {character.name ? (
        <div className={styles.contenedor}>
            <div className={styles.caja}>
                <h1 className={styles.titulogrande}>Nombre: {character.name}</h1>
                <h2 className={styles.titulo}>STATUS: {character.status}</h2>
                <h2 className={styles.titulo}>ESPECIE: {character.species}</h2>
                <h2 className={styles.titulo}>GÉNERO: {character.gender}</h2>
                <h2 className={styles.titulo}>ORIGIN: {character.origin?.name}</h2>
            </div>
            <div className={styles.cajados}>
                <img src={character.image} alt={character.name} />
            </div>
            
        </div>
    ) : (
        <div ><h2 className={styles.loading}>Loading..</h2></div>
    )}
    <Link to="/Home"><button className={styles.boton}>Volver al inicio</button></Link>
</div>

    );
}

export default Detail;
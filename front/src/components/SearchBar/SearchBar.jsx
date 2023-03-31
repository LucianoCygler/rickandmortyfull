import { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {

   const [id, setID] = useState("");
   const handleChange = (event) => {
      //quien ejecuta? el input
      setID(event.target.value)
   };
   return (
      <div className={styles.barra}>
         <input className={styles.SearchBar} type='search' placeholder="Inserte nombre a buscar.." onChange={handleChange} />
         <button className={styles.boton} onClick={()=>onSearch(id)}>Cargar</button>  
        
      </div>
   );
}
// si pongo directamente onsearch ejecuta el llamado osea un numero, yo quiero que onsearch ejecute la funcion al hacer click.
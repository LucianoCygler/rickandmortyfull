import { connect } from "react-redux";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { agregarFavorito, eliminarFavorito } from "../../redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Card({ id, name, species, gender, image, onClose, agregarFavorito, eliminarFavorito, myFavorites }) { //(props)

const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         eliminarFavorito(id,dispatch);
      }
      if (!isFav) {
         setIsFav(true);

         agregarFavorito({ id, name, species, gender, image, onClose },dispatch);
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);


   return (


      <div className={styles.carta}>
         {
            isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={styles.cajatexto}>
            <button className={styles.boton} onClick={() => onClose(id)}>X</button>

            <Link to={`/Detail/${id}`}>

               <h2 className={styles.detalle} >{name}</h2 >
            </Link>

            <h2 className={styles.titulo}>{species}</h2>
            <h2 className={styles.titulo}>{gender}</h2>
         </div>

         <img src={image} alt="" />

      </div>
   );
}

const mapDispatchToProps = (dispatch) => ({
   agregarFavorito: (character) => dispatch(agregarFavorito(character)),
   eliminarFavorito: (id) => dispatch(eliminarFavorito(id)),
});

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);

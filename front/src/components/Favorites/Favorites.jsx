import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions';
import Card from '../Card/Card';
import styles from "./Favorites.module.css";

const Favorites = () => {
    const favorites = useSelector(state => state.filterFavorites);
    const dispatch = useDispatch();
    const order = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const filter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return (
        <>

            <div>
                <select name="" onChange={order}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="" onChange={filter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>

                </select>
            </div>
            <div className={styles.contenedor}>
                {favorites.map((fav) => {
                    return <Card key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                    />;
                })}
            </div>
        </>



    )
}


// const mapStateToProps = (state) => {
//     return {
//         myFavorites: state.myFavorites
//     }
// }

//export default connect(mapStateToProps, null)(Favorites);
export default Favorites;
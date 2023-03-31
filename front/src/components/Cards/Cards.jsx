import Card from '../Card/Card';
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) { //(props)
   //const { characters } = props;

   return (
      <div className={styles.cartas} >
         {
            characters.map(({ id, name, species, gender, image }) => { //(character)destructuring
               return (<Card
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose} />
               );
            })
         }
      </div>
   );
}

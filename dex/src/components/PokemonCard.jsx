import styles from './PokemonCard.module.css';

function PokemonCard({ pokemon }) {
    return <div className={styles.container}>
            <figure> 
                {pokemon.imgSrc === undefined 
                    ? 
                    <p>???</p> 
                    :                 
                    <img 
                        src={pokemon.imgSrc}
                        alt={pokemon.name}>
                    </img>
                }

                <figcaption className={styles.title} >{pokemon.name}</figcaption>
            </figure>
            </div>
  }


  
  export default PokemonCard;
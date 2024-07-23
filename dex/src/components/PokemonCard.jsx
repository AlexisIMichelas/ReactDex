import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonCard.module.css';

function PokemonCard({ pokemon }) {
    return (
        <div className={styles.container}>
            <figure> 
                {pokemon.imgSrc === undefined 
                    ? 
                    <p>???</p> 
                    :                 
                    <img 
                        src={pokemon.imgSrc}
                        alt={pokemon.name}
                    />
                }
                <figcaption className={styles.title}>{pokemon.name}</figcaption>
            </figure>
        </div>
    );
}

// Définir les types des props
PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;

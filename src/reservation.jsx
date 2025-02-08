import React from 'react';
import { Link } from 'react-router-dom';
import './reservation.css';

function Reservations() {
  return (
    <form action="POST"> 
        <label>
            Nom 
        </label>
        <input type="text" name="nom" placeholder='entrez votre nom' required></input>
        <label>
            Prénom
        </label>
        <input type="text" name="prenom" placeholder='entrez votre prénom' required></input>
        <label>Nombre table que vous pouvez le reservez </label>
        <input type="number" name="nombre" placeholder='nombre' min="0" required></input>
        <label>Entrez la date de reservation</label>
        <input type="datetime-local" id="datetime" name="datetime" required></input>
        <label>Entrez le nombre de personne</label>
        <input type="number" name="nombre" placeholder='nombre' min="0" required></input>
        <button type="submit">Send</button>
    </form>
  );
}

export default Reservations;
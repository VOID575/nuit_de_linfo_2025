import React from 'react';
import { NavLink } from 'react-router-dom';
import './Level1End.css';

const Level1End = () => {
    return (
    <div className="level1end-container">
        <h1>Félicitation, vous vous êtes fait arnaqué</h1>
        <p>Aïe Aïe, vous vous êtes faits avoir par un logiciel espion qui a supprimé vos données.
        <br/>
    Vous avez fait 2 énormes erreurs. Premièrement, vous avez téléchargé un logiciel qui n’était pas open-source.
<br/>
    Par conséquent, le logiciel avait un comportement imprévisible et pouvait contenir des spywares.
    Deuxièmement, vous n’avez pas gardés vos données sensibles sur d’autres plateformes tels qu’un cloud, une clé usb ou un disque dur externe.
<br/>
    MAINTENANT, IL EST L’HEURE DE LA REVANCHE.

    </p>
        <NavLink to="/level2Intro" className="level1end-button">Niveau 2</NavLink>
    </div>
    );
};

export default Level1End;

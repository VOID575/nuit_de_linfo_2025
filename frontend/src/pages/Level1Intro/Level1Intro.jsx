import React from 'react';
import './Level1Intro.css';
import { NavLink } from 'react-router-dom';

const Level1Intro = () => {
  return (
    <div className="level1-intro">

      <div className="li-main">
        <aside className="li-left">
          <div className="li-oval">niv 1</div>

          <div className="li-box">
            <h4>Vos fichiers seront perdus le</h4>
            <p className="li-date">19/05/2017 16:50:06</p>
            <p className="li-small">Temps restant</p>
            <p className="li-timer">05:23:34:22</p>
          </div>

          <div className="li-box">
            <h4>Vos fichiers seront perdus le</h4>
            <p className="li-date">19/05/2017 16:50:06</p>
            <p className="li-small">Temps restant</p>
            <p className="li-timer">05:23:34:22</p>
          </div>
        </aside>

        <section className="li-center">
          <h1 className="li-title">Oups, vos fichiers ont été chiffrés !</h1>

          <div className="li-panel">
            <p className="lead">
              Bien sûr. Nous garantissons que vous pouvez récupérer tous vos fichiers en toute sécurité et facilement. Mais vous n'avez pas beaucoup de temps.
            </p>

            <p>
               Mais si vous voulez déchiffrer tous vos fichiers, vous devez payer. Vous n’avez que 3 jours pour effectuer le paiement. Après cela, le prix sera doublé. De plus, si vous ne payez pas dans les 7 jours, vous ne pourrez plus jamais récupérer vos fichiers. Nous organiserons des événements gratuits pour les utilisateurs qui sont si pauvres qu’ils n’ont pas pu payer en 6 mois.
            </p>

            <p>
              Bien sûr. Nous garantissons que vous pouvez récupérer tous vos fichiers en toute sécurité et facilement. Mais vous n’avez pas beaucoup de temps.
            </p>

            <p>
              Mais si vous voulez déchiffrer tous vos fichiers, vous devez payer. Vous n’avez que 3 jours pour effectuer le paiement. Après cela, le prix sera doublé. De plus, si vous ne payez pas dans les 7 jours, vous ne pourrez plus jamais récupérer vos fichiers. Nous organiserons des événements gratuits pour les utilisateurs qui sont si pauvres qu’ils n’ont pas pu payer en 6 mois.
            </p>

            <p>
              Le paiement est accepté uniquement en Bitcoin. Pour plus d’informations, cliquez sur <b>About bitcoin</b>.
            </p>

            <p>Veuillez vérifier le prix actuel du Bitcoin et en acheter. Pour plus d’informations, cliquez sur <b>How to buy bitcoins</b>. Envoyez ensuite le montant correct à l’adresse indiquée dans cette fenêtre. Après votre paiement, cliquez sur. Meilleur moment pour vérifier : de 9 h à 11 h GMT, du lundi au vendredi.</p>

            <div className="li-payment">
              <div className="li-payment-left">
                <p className="small-muted">Envoyez l'équivalent de 300 $ en bitcoin à cette adresse :</p>
                <p className="btc-address">Palais de l'Élysée 55 rue du Faubourg-Saint-Honoré</p>
              </div>

              <div className="li-payment-right">
                  <NavLink to="/Level1Game" className="nav-link">Payer</NavLink>
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Level1Intro;

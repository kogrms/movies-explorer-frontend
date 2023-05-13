import React from 'react';
import promoLogoPath from '../../images/promo-logo.svg';
import NavTab from '../NavTab/NavTab';

function Promo (props)  {
  return (
    <div className="promo">
      <div className="promo__text-block">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        {/* <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p> */}
      </div>
      <img className="promo__logo" src={promoLogoPath} alt="Логотип спираль" />
    </div>
  );
}

export default Promo;

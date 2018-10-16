import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        <div className="header__main">
          <div className="header__main-icon">
            <img src="../img/lambda.png" alt="лямбда" />
          </div>
          <h3 className="header__main-name">Репетитор по математике и информатике</h3>
        </div>
        <nav className="header__menu">
          <Link to="/" className="header__menu-item">Обо мне</Link>
          <Link to="/classes" className="header__menu-item">Занятия</Link>
          <Link to="/reviews" className="header__menu-item">Отзывы</Link>
          <Link to="/prices" className="header__menu-item">Цены</Link>
          <Link to="/contacts" className="header__menu-item">Контакты</Link>
        </nav>
      </header>
    );
}

export default Header;

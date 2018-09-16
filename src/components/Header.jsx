import React from 'react';

const Header = () => {
    return (
      <header class="header">
        <div class="header__main">
          <div class="header__main-icon">
            <img src="../img/lambda.png" alt="лямбда" />
          </div>
          <h3 class="header__main-name">Репетитор по математике и информатике</h3>
        </div>
        <nav class="header__menu">
          <a href="#aboutme" class="header__menu-item">Обо мне</a>
          <a href="#classes" class="header__menu-item">Занятия</a>
          <a href="#reviews" class="header__menu-item">Отзывы</a>
          <a href="#prices" class="header__menu-item">Цены</a>
          <a href="#contacts" class="header__menu-item">Контакты</a>
        </nav>
      </header>
    );
}

export default Header;

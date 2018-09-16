import React from 'react';

const Classes = () => {
    return (
        <section class="classes">
            <h1 class="classes__name">Занятия</h1>
            <div class="classes__studing">
                <div class="classes__icon">
                    <img src="../img/open-book.png" alt="учёба" />
                </div>
                    <div class="classes__article">
                        <h3  class="classes__article-name">Учёба</h3>
                        <p class="classes__article-text">Беру учеников 5-10 классов. Готовлю по отработаной методике. Для первого занятия вам понадобится 2 тетрадки.</p>
                    </div>
            </div>
            <div class="classes__departure">
              <div class="classes__article">
                <h3  class="classes__article-name">Выезд</h3>
                <p class="classes__article-text">Работаю на выезд в пределах 1 часа езды. Проезд оплачиваю сам. Я живу в Москве, у метро Новогиреево.</p>
              </div>
              <div class="classes__icon">
                <img src="../img/bus.png" alt="выезд" />
              </div>
            </div>
        </section>
    );
}

export default Classes;

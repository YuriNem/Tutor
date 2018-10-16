import React from 'react';

const Classes = () => {
    return (
        <section className="classes">
            <h1 className="classes__name">Занятия</h1>
            <div className="classes__studing">
                <div className="classes__icon">
                    <img src="../img/open-book.png" alt="учёба" />
                </div>
                    <div className="classes__article">
                        <h3  className="classes__article-name">Учёба</h3>
                        <p className="classes__article-text">Беру учеников 5-10 классов. Готовлю по отработаной методике. Для первого занятия вам понадобится 2 тетрадки.</p>
                    </div>
            </div>
            <div className="classes__departure">
              <div className="classes__article">
                <h3  className="classes__article-name">Выезд</h3>
                <p className="classes__article-text">Работаю на выезд в пределах 1 часа езды. Проезд оплачиваю сам. Я живу в Москве, у метро Новогиреево.</p>
              </div>
              <div className="classes__icon">
                <img src="../img/bus.png" alt="выезд" />
              </div>
            </div>
        </section>
    );
}

export default Classes;

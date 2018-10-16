import React from 'react';

const AboutMe = () => {
    return (
        <section className="aboutme">
            <div className="aboutme__photoside">
                <div className="aboutme__photoside-photo">
                    <img src="../img/tutor.jpg" alt="репетитор" />
                </div>
            </div>
            <div className="aboutme__textside">
                <h1 className="aboutme__textside-name">Обо мне</h1>
                <article className="article">
                    <h3 className="article__name">Интересы</h3>
                    <p className="article__text">Здравствуйте, меня зовут Юрий Немушкин. Стараюсь тратить своё время на саморазвитие, интересуюсь тем, что связано с IT. Больше всего, я люблю программирование, примеры моих проектов доступны на <a href="https://github.com/YuriNem">GitHub</a>.</p>
                </article>
                <article className="article">
                    <h3 className="article__name">Образование</h3>
                    <p className="article__text">Cтудент МГТУ им. Н. Э. Баумана. Учусь на программиста по специальности "Программная инженерия". Набрал <b>100 баллов</b> на ЕГЭ по информатике.</p>
                </article>
                <article className="article">
                    <h3 className="article__name">Опыт</h3>
                    <p className="article__text">Работаю репетитором по математике и информатике c 2017 года. За прошлый год успешно подготовил 5 учеников к сдаче экзаменов. Информацию о моих занятиях вы найдете ниже.</p>
                </article>
            </div>
        </section>
    );
}

export default AboutMe;

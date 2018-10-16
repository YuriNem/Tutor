import React from 'react';

const Reviews = () => {
    return (
        <section className="reviews">
            <h1 className="reviews__name">Отзывы</h1>
            <p className="reviews__text">Вы можете написать моими учениками в VK и узнать у них о занятиях, нажав по их именам:</p>
            <div className="reviews__former">
                <h3 className="reviews__former-name">Бывшие</h3>
                <a className="reviews__student" href="https://vk.com/stefan1525">
                    <h4 className="reviews__student-name">Стефан Роо</h4>
                    <p className="reviews__student-grade">9 класс</p>
                    <p className="reviews__student-time">1 год занятий</p>
                </a>
                <a className="reviews__student" href="https://vk.com/arseniyisk">
                    <h4 className="reviews__student-name">Арсений Иськов</h4>
                    <p className="reviews__student-grade">6 класс</p>
                    <p className="reviews__student-time">1 год занятий</p>
                </a>
                <a className="reviews__student" href="https://vk.com/id254929162">
                    <h4 className="reviews__student-name">Леон Григорян</h4>
                    <p className="reviews__student-grade">9 класс</p>
                    <p className="reviews__student-time">1 год занятий</p>
                </a>
            </div>
            <div className="reviews__current">
                <h3 className="reviews__current-name">Текущие</h3>
                <a className="reviews__student" href="https://vk.com/e.medvedeva2003">
                    <h4 className="reviews__student-name">Елизавета Медведева</h4>
                    <p className="reviews__student-grade">9 класс</p>
                    <p className="reviews__student-time">2 год занятий</p>
                </a>
                <a className="reviews__student" href="https://vk.com/id152839837">
                    <h4 className="reviews__student-name">Михаил Шелковников</h4>
                    <p className="reviews__student-grade">10 класс</p>
                    <p className="reviews__student-time">2 год занятий</p>
                </a>
                <a className="reviews__student" href="https://vk.com/nastya_kuznetsova2003">
                    <h4 className="reviews__student-name">Настя Кузнецова</h4>
                    <p className="reviews__student-grade">8 класс</p>
                    <p className="reviews__student-time">1 год занятий</p>
                </a>
                <div className="reviews__empty"></div>
                <a className="reviews__student" href="https://vk.com/pilot320llolegf">
                    <h4 className="reviews__student-name">Олег Федоринов</h4>
                    <p className="reviews__student-grade">7 класс</p>
                    <p className="reviews__student-time">1 год занятий</p>
                </a>
            </div>
        </section>
    );
}

export default Reviews;

import React from 'react';

const Reviews = () => {
    return (
        <section class="reviews">
            <h1 class="reviews__name">Отзывы</h1>
            <p class="reviews__text">Вы можете написать моими учениками в VK и узнать у них о занятиях, нажав по их именам:</p>
            <div class="reviews__former">
                <h3 class="reviews__former-name">Бывшие</h3>
                <a class="reviews__student" href="https://vk.com/stefan1525">
                    <h4 class="reviews__student-name">Стефан Роо</h4>
                    <p class="reviews__student-grade">9 класс</p>
                    <p class="reviews__student-time">1 год занятий</p>
                </a>
                <a class="reviews__student" href="https://vk.com/arseniyisk">
                    <h4 class="reviews__student-name">Арсений Иськов</h4>
                    <p class="reviews__student-grade">6 класс</p>
                    <p class="reviews__student-time">1 год занятий</p>
                </a>
                <a class="reviews__student" href="https://vk.com/id254929162">
                    <h4 class="reviews__student-name">Леон Григорян</h4>
                    <p class="reviews__student-grade">9 класс</p>
                    <p class="reviews__student-time">1 год занятий</p>
                </a>
            </div>
            <div class="reviews__current">
                <h3 class="reviews__current-name">Текущие</h3>
                <a class="reviews__student" href="https://vk.com/e.medvedeva2003">
                    <h4 class="reviews__student-name">Елизавета Медведева</h4>
                    <p class="reviews__student-grade">9 класс</p>
                    <p class="reviews__student-time">2 год занятий</p>
                </a>
                <a class="reviews__student" href="https://vk.com/id152839837">
                    <h4 class="reviews__student-name">Михаил Шелковников</h4>
                    <p class="reviews__student-grade">10 класс</p>
                    <p class="reviews__student-time">2 год занятий</p>
                </a>
            </div>
        </section>
    );
}

export default Reviews;

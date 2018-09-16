import React from 'react';
import data from '../../data/data.js';

const Prices = ({ subject, method, time, onChange }) => {
    console.log(subject, data);
    const [{ price }] = data.filter(item => (item.subject === subject) && (item.method === method) && (item.time === time));
    return (
        <section class="prices">
            <h1 class="prices__name">Цены</h1>
            <p class="prices__text">Готовлю к ОГЭ по математике и ЕГЭ по информатике, а также улучшаю успеваемость учеников 5-10 классов. Вы можете посмотреть цены на доступные услуги:</p>
            <div class="prices__selects">
                <select name="prices__subject" id="prices__subject" class="prices__subject" value={subject} onChange={onChange('subject')}>
                    <option value="Математика - ОГЭ">Математика - ОГЭ</option>
                    <option value="Информатика - ЕГЭ">Информатика - ЕГЭ</option>
                    <option value="Математика - улучшение успеваемости 5-9 классы">Математика - улучшение успеваемости 5-9 классы</option>
                    <option value="Математика - улучшение успеваемости 10 класс">Математика - улучшение успеваемости 10 класс</option>
                </select>
                <select name="prices__method" id="prices__method" class="prices__method" value={method} onChange={onChange('method')}>
                    <option value="Выезд">Выезд</option>
                    <option value="Онлайн">Онлайн</option>
                </select>
                <select name="prices__time" id="prices__time" class="prices__time" value={time} onChange={onChange('time')}> 
                    <option value="60 минут">60 минут</option>
                    <option value="90 минут">90 минут</option>
                </select>
            </div>
            <h2 class="prices__show">{price}</h2>
        </section>
    );
}

export default Prices;

import React from 'react';

const Prices = ({ subject, method, time, price, onChange }) => {
    return (
        <section className="prices">
            <h1 className="prices__name">Цены</h1>
            <p className="prices__text">Готовлю к ОГЭ по математике и ЕГЭ по информатике, а также улучшаю успеваемость учеников 5-11 классов. Вы можете посмотреть цены на доступные услуги:</p>
            <div className="prices__selects">
                <select name="prices__subject" id="prices__subject" className="prices__subject" value={subject} onChange={onChange('subject')}>
                    <option value="Математика - ОГЭ">Математика - ОГЭ</option>
                    <option value="Информатика - ЕГЭ">Информатика - ЕГЭ</option>
                    <option value="Математика - улучшение успеваемости 5-9 классы">Математика - улучшение успеваемости 5-9 классы</option>
                    <option value="Математика - улучшение успеваемости 10 класс">Математика - улучшение успеваемости 10 класс</option>
                </select>
                <select name="prices__method" id="prices__method" className="prices__method" value={method} onChange={onChange('method')}>
                    <option value="Выезд">Выезд</option>
                    <option value="Онлайн">Онлайн</option>
                </select>
                <select name="prices__time" id="prices__time" className="prices__time" value={time} onChange={onChange('time')}> 
                    <option value="60 минут">60 минут</option>
                    <option value="90 минут">90 минут</option>
                </select>
            </div>
            <h2 className="prices__show">{price}</h2>
        </section>
    );
}

export default Prices;

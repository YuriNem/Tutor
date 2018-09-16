class Prices {
    constructor(subject, method, time, price) {
        this.subject = subject;
        this.method = method;
        this.time = time;
        this.price = price;
    }
}

const price1 = new Prices('Информатика - ЕГЭ', 'Выезд', '60 минут', '1000 рублей');
const price2 = new Prices('Информатика - ЕГЭ', 'Выезд', '90 минут', '1500 рублей');
const price3 = new Prices('Информатика - ЕГЭ', 'Онлайн', '60 минут', '600 рублей');
const price4 = new Prices('Информатика - ЕГЭ', 'Онлайн', '90 минут', '900 рублей');

const price5 = new Prices('Математика - ОГЭ', 'Выезд', '60 минут', '700 рублей');
const price6 = new Prices('Математика - ОГЭ', 'Выезд', '90 минут', '1000 рублей');
const price7 = new Prices('Математика - ОГЭ', 'Онлайн', '60 минут', '400 рублей');
const price8 = new Prices('Математика - ОГЭ', 'Онлайн', '90 минут', '600 рублей');

const price9 = new Prices('Математика - улучшение успеваемости 5-9 классы', 'Выезд', '60 минут', '600 рублей');
const price10 = new Prices('Математика - улучшение успеваемости 5-9 классы', 'Выезд', '90 минут', '900 рублей');
const price11 = new Prices('Математика - улучшение успеваемости 5-9 классы', 'Онлайн', '60 минут', '400 рублей');
const price12 = new Prices('Математика - улучшение успеваемости 5-9 классы', 'Онлайн', '90 минут', '600 рублей');

const price13 = new Prices('Математика - улучшение успеваемости 10 класс', 'Выезд', '60 минут', '800 рублей');
const price14 = new Prices('Математика - улучшение успеваемости 10 класс', 'Выезд', '90 минут', '1200 рублей');
const price15 = new Prices('Математика - улучшение успеваемости 10 класс', 'Онлайн', '60 минут', '500 рублей');
const price16 = new Prices('Математика - улучшение успеваемости 10 класс', 'Онлайн', '90 минут', '700 рублей');

const data = [price1, price2, price3, price4, price5, price6, price7, price8, price9, price10, price11, price12, price13, price14, price15, price16];

export default data;

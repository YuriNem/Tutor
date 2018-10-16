import React from 'react';

const Contacts = () => {
    return (
        <section className="contacts">
            <h1 className="contacts__name">Контакты</h1>
            <p className="contacts__text">Вы можете позвонить мне по телефону:</p>
            <h2 className="contacts__phone">+7 (926) 643-08-15</h2>
            <p className="contacts__text">Или написать мне по этому телефону в WhatsApp, Viber, Telegram:</p>
            <div className="contacts__icons">
                <div className="contacts__icon">
                    <img src="../img/whatsapp.png" alt="whatsapp" />
                </div>
                <div className="contacts__icon">
                    <img src="../img/viber.png" alt="viber" />
                </div>
                <div className="contacts__icon">
                    <img src="../img/telegram.png" alt="telegram" />
                </div>
            </div>
            <p className="contacts__text">А также связаться со мной в VK, ссылка на картинке:</p>
            <div className="contacts__icon-link">
                <div className="contacts__icon">
                    <a href="https://vk.com/yurinemushkin">
                        <img src="../img/vk.png" alt="vk" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

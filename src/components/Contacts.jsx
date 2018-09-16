import React from 'react';

const Contacts = () => {
    return (
        <section class="contacts">
            <h1 class="contacts__name">Контакты</h1>
            <p class="contacts__text">Вы можете позвонить мне по телефону:</p>
            <h2 class="contacts__phone">+7 (926) 643-08-15</h2>
            <p class="contacts__text">Или написать мне по этому телефону в WhatsApp, Viber, Telegram:</p>
            <div class="contacts__icons">
                <div class="contacts__icon">
                    <img src="../img/whatsapp.png" alt="whatsapp" />
                </div>
                <div class="contacts__icon">
                    <img src="../img/viber.png" alt="viber" />
                </div>
                <div class="contacts__icon">
                    <img src="../img/telegram.png" alt="telegram" />
                </div>
            </div>
            <p class="contacts__text">А также связаться со мной в VK, ссылка на картинке:</p>
            <div class="contacts__icon-link">
                <div class="contacts__icon">
                    <a href="https://vk.com/yurinemushkin">
                        <img src="../img/vk.png" alt="vk" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacts;

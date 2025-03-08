'use client'

import React, {useState} from 'react';

import s from "../../styles/Card.module.scss"
import classNames from 'classnames';

const Card = () => {

    const [flipped, setFlipped] = useState(false)

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <div className={s.card} onClick={handleClick}>
            <div className={classNames(s.card__inner, flipped ? s.flipped : {})}>
                <div className={s.card__inner_front}>
                    <h2>Открытка</h2>
                    <p>Нажмите, чтобы открыть</p>
                </div>
                <div className={s.card__inner_back}>
                    <h2>С 8 Марта!</h2>
                    <p>Дорогая мама, поздравляю с 8 Марта! Желаю тебе самого весеннего настроения,
                        вечной молодости, бесконечного счастья и крепкого здоровья. Пусть все цветы мира
                        расцветают для тебя, а на лице всегда будет улыбка! С любовью, твой сын.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
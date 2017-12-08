import React from 'react';
import img2 from "../../assets/images/chris.png";
import img3 from "../../assets/images/1242134.png"
import img4 from "../../assets/images/5B4A0730.png";
import img5 from "../../assets/images/34341.png";
import img6 from "../../assets/images/2017-11-12_17-04-40.png";
import logo from "../../assets/images/logo-xmas.svg";

const name = (props) => (
    <div className="events">
        <h2 className="cmn-h2">События</h2>
        <div className="events__list">
            <div className="events__item events__item_logo">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <img src={img2} alt="" className="events__image" />
                    </div>
                    <div className="events__content events__content_logo">
                        <div className="events__logo">
                            <img src={logo} alt="" className="events__logo-image" />
                        </div>
                        <div className="events__date events__date_logo">
                            20 декабря – 14 января
                        </div>
                    </div>
                </a>
            </div>
            <div className="events__item events__item_review">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <span className="events__label">Обзор</span>
                        <img src={img3} alt="" className="events__image" />
                    </div>
                    <div className="events__content events__content_review">
                        <div className="events__title events__title_review">Двадцать лучших выставок
                            декабря</div>
                    </div>
                </a>
            </div>
            <div className="events__item">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <img src={img5} alt="" className="events__image" />
                    </div>
                    <div className="events__content">
                        <div className="events__title">Выставка «В предчувствии света луч солнца прощальный» на Арбате</div>
                        <div className="events__date">31 октября – 12 ноября</div>
                    </div>
                </a>
            </div>
            <div className="events__item">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <img src={img4} alt="" className="events__image" />
                    </div>
                    <div className="events__content">
                        <div className="events__title">Выставка «Картина с удобствами»</div>
                        <div className="events__date">20 – 30 октября</div>
                    </div>
                </a>
            </div>
            <div className="events__item">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <img src={img6} alt="" className="events__image" />
                    </div>
                    <div className="events__content">
                        <div className="events__title">Выставка «В предчувствии света луч солнца прощальный» на Арбате</div>
                        <div className="events__date">20 – 30 октября</div>
                    </div>
                </a>
            </div>
            <div className="events__item">
                <a href="" className="event__link">
                    <div className="events__image-wrap">
                        <img src={img6} alt="" className="events__image" />
                    </div>
                    <div className="events__content">
                        <div className="events__title">Выставка «Зеленая кисточка. Нарисуй мне Крым»</div>
                        <div className="events__date">20 – 30 октября</div>
                    </div>
                </a>
            </div>


        </div>


    </div>
);
export default name;



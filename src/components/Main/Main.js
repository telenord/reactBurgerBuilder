import React from 'react';
import Projects from './Projects';
import Events from './Events';
import Services from './Services';


import img1 from '../../assets/images/2017-11-12_17-09-34@2x.png';




const name = (props) => (
    <div className="wrapper container-fluid">
        <div className="row">


            <div className="search col-xs-12">
                <label className="search__label">
                    <input className="search__query" placeholder="Поиск" />
                </label>
            </div>


            <ul className="tag-menu col-xs-12">
                <li className="tag-menu__item">Программа реновации</li>
                <li className="tag-menu__item">Зарядье</li>
                <li className="tag-menu__item">ЧМ-2018</li>
                <li className="tag-menu__item">Электронный дневник</li>
                <li className="tag-menu__item">МЭШ</li>
                <li className="tag-menu__item">Поиск кружков</li>
                <li className="tag-menu__item">Московские сезоны</li>
                <li className="tag-menu__item">Оплата штрафов ГИБДД</li>
                <li className="tag-menu__item tag-menu__item_more">Ещё</li>
            </ul>


            <div className="news col-sm-8 col-md-6">
                <h2 className="cmn-h2">Новости</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="news__item col-xs-12">
                            <div className="news__image-wrap">
                                <span className="news__label">Новость мэра</span>
                                <img className="cmn-img-fluid" src={img1}/>
                            </div>
                            <div className="news__text">
                                Сергей Собянин вручил премии города Москвы в области медицины 44 врачам
                            </div>
                        </div>
                        <div className="news__item col-sm-6">
                            <div className="news__image-wrap">
                                <img className="cmn-img-fluid" src={img1}/>
                            </div>
                            <div className="news__text">
                                Сергей Собянин вручил премии города Москвы в области медицины 44 врачам
                            </div>
                        </div>
                        <div className="news__item col-sm-6">
                            <div className="news__image-wrap">
                                <img className="cmn-img-fluid" src={img1}/>
                            </div>
                            <div className="news__text">
                                Сергей Собянин вручил премии города Москвы в области медицины 44 врачам
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="today col-sm-4 col-md-3">
                <h2 className="cmn-h2">Сегодня</h2>
                <dl className="today__list">
                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>

                    <dt className="today__title"><span className="today__time">11:45</span> Транспорт</dt>
                    <dd className="today__description">Началась архитектурная отделка станций метро «Окружная» и «Верхние
                        Лихоборы»
                    </dd>
                </dl>
            </div>


            <div className="important col-xs-12 col-md-3">
                <h2 className="cmn-h2">Важное</h2>
            </div>

            <div className="banner col-xs-12">Перетяжка</div>


            <Services/>

            <div className="col-sm-8 col-md-9">

                <Events/>
                <Projects />

            </div>

        </div>
    </div>
);
export default name;



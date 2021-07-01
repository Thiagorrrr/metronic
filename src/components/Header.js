import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { activeMenu, activeUser } = useContext(ThemeContext);
    return (
        <header className="header">
            <div className="header__mobile d-lg-none">
                <div className="header__mobile-fixed">
                    <h1 className="header__brand-name"> metronic </h1>
                    <div className="header__box-config  d-lg-none">
                        <a className="header__config" href="#s">
                            <i className="header__icon fas fa-cog"> </i>
                        </a>
                        <div className="header__user" onClick={() => { activeUser() }}>
                            <img className="header__user-img " src={process.env.PUBLIC_URL + 'user.jpg'} alt="imagem do usuário" />
                        </div>
                        <input className="header__menu-hamburguer" id="menu-hamburguer" type="checkbox" />

                        <label className="header__label" for="menu-hamburguer">
                            <span className="header__hamburguer" onClick={() => { activeMenu() }}>
                                <span className="header__hamburguer-md"> </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="header__box">
                <div className="header__box-fixed">
                    <div className="header__logo d-none d-lg-flex">
                        <img className="header__img" src={process.env.PUBLIC_URL + 'logo512.png'} alt="logo acme" />
                    </div>

                    <div className="header__box-info">
                        <div className="header__wrapper">
                            <h2 className="header__title">Incubadora de Empresas ACME </h2>
                            <div className="header__box-config d-none d-lg-flex">
                                <a className="header__config" href="#s">
                                    <i className="header__icon fas fa-cog"> </i>
                                </a>
                                <div className="header__user" onClick={() => { activeUser() }}>
                                    <img className="header__user-img " src={process.env.PUBLIC_URL + 'user.jpg'} alt="imagem do usuário" />
                                </div>
                            </div>
                        </div>
                        <div className="header__dash">Dashboard</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;

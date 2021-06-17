import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { activeMenu } = useContext(ThemeContext);

    return (
        <header className="header">
            <div className="header__mobile d-lg-none">
                <div className="header__mobile-fixed">
                    <h1 className="header__brand-name"> metronic </h1>
                    <input className="header__menu-hamburguer" id="menu-hamburguer" type="checkbox" />

                    <label className="header__label" for="menu-hamburguer">
                        <span className="header__hamburguer" onClick={() => { activeMenu() }}>
                            <span className="header__hamburguer-md"> </span>
                        </span>
                    </label>

                </div>
            </div>
            <div className="header__wrapper">
                <h2 className="header__title">FINDEX - Incubadora de empreendimentos Inovadores e tecnológicos </h2>
                <i className="header__icon fas fa-cog"> </i>
            </div>
            <div className="header__dash">Dashboard</div>
        </header>
    )
}
export default Header;

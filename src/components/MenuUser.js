import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import Email from '../svg/Email'

const MenuUser = ({user}) => {
    const {  activeUser } = useContext(ThemeContext);
    return (
        <div className={`menuUser ${user ? 'menuUser--active' : ''}` }>
            <div className="menuUser__wrapper">
                <div className="menuUser__box-name">
                    <h3 className="menuUser__title">Perfil do usuário </h3>
                    <div className="menuUser__close" onClick={()=>activeUser()}>
                        <i className="menuUser__icon fas fa-times"></i>
                    </div>
                    <div className="menuUser__box-perfil">
                        <div className="menuUser__box-img">
                            <img className="menuUser__img " src={`${process.env.PUBLIC_URL}user.jpg` } alt="imagem do usuário"/>
                            <span className="menuUser__status menuUser__status--active"> </span>
                        </div>
                        <div className="menuUser__wrapper-perfil">
                            <a href="#s" className="menuUser__name">James Jones </a>
                            <span className="menuUser__perfil">Application Developer </span>
                            <span className="menuUser__email">
                               <Email/>
                                <a href="mail:teste.com.br">jm@softplus.com </a>
                            </span>
                            <div className="menuUser__box-btn">
                                <a  className="menuUser__btn" href="#d" onClick={()=>activeUser()}> sair</a> 
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuUser;

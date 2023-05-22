import React, { useState } from 'react';
import './style.css';
import Title from '../title';

import ImgHomeMenu from '../../img/home.ico';
import ImgViolaoMenu from '../../img/violao.ico';
import ImgpalhetaMenu from '../../img/palheta.ico';
import ImgContaMenu from '../../img/conta.ico';
import ImgSetaFront from '../../img/arrow-front.ico';
import ImgSetaBack from '../../img/arrow-back.ico';

function Header() {
  const [EsconderMenu, setEsconderMenu] = useState(false);

  function Menu() {
    EsconderMenu === false ? setEsconderMenu(true) : setEsconderMenu(false);
  }

  return (
    <>
      <div id="header">
        <div id="banner">
          <div id="title">
            <Title />
          </div>
          <div id="esconder" onClick={Menu}>
            {EsconderMenu === false ? (
              <img
                style={{ width: '60px' }}
                src={ImgSetaFront}
                alt="arrow front"
              />
            ) : (
              <img
                style={{ width: '60px' }}
                src={ImgSetaBack}
                alt="arrow back"
              />
            )}
          </div>
          <div id={EsconderMenu === false ? 'menu' : 'esconderMenu'}>
            <ul>
              <li>
                <a href="home">
                  <img src={ImgHomeMenu} alt="Home" />
                </a>
              </li>
              <li>
                <a href="Recomendados">
                  <img
                    style={{ width: '50px' }}
                    src={ImgViolaoMenu}
                    alt="ViolaoRecomendados"
                  />
                </a>
              </li>
              <li>
                <a href="Aprender">
                  <img
                    style={{ width: '50px' }}
                    src={ImgpalhetaMenu}
                    alt="Aprender"
                  />
                </a>
              </li>
              <li>
                <a href="Conta">
                  <img src={ImgContaMenu} alt="Conta" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

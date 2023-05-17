import React from 'react';
import './style.css';
import Title from '../title';

import ImgHomeMenu from '../../img/home.ico';
import ImgViolaoMenu from '../../img/violao.ico';
import ImgpalhetaMenu from '../../img/palheta.ico';
import ImgContaMenu from '../../img/conta.ico';

function Header() {
  return (
    <>
      <div id="header">
        <div id="banner">
          <Title />
      
            <div id="menu">
              <ul>
                <li>
                  <a href="home">
                    <img src={ImgHomeMenu} alt="Home" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{ width: '3%' }}
                      src={ImgViolaoMenu}
                      alt="Compra"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      style={{ width: '3%' }}
                      src={ImgpalhetaMenu}
                      alt="Aprender"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
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

import React from 'react';
import './title.css';
// ------------------------- Imagem -------------------------
import imgLogo from '../../img/menu/violao.png';

// ------------------------- Title -------------------------

function Title() {
  return (
    <>
      <div id="imglogo">
        <div id="MainLogo">
          <img id="imgViolao" src={imgLogo} alt="ViolaoLogo" />
          <h1>StartSom</h1>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Title;

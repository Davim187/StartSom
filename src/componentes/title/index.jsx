import React from 'react';
import './title.css';

import imgLogo from '../../img/violao.png';

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

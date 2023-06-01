import React from 'react';
import Header from '../../componentes/header';
import './style.css';

//************************************* Img ************************************

import notas from '../../img/aprender/notas.png';
import C from '../../img/aprender/notasMaior/C.png';
import D from '../../img/aprender/notasMaior/D.png';
import E from '../../img/aprender/notasMaior/E.png';
import F from '../../img/aprender/notasMaior/F.png';
import G from '../../img/aprender/notasMaior/G.png';
import A from '../../img/aprender/notasMaior/A.png';
import B from '../../img/aprender/notasMaior/B.png';
import Cm from '../../img/aprender/notasMenor/Cm.png';
import Dm from '../../img/aprender/notasMenor/Dm.png';
import Em from '../../img/aprender/notasMenor/Em.png';
import Fm from '../../img/aprender/notasMenor/Fm.png';
import Gm from '../../img/aprender/notasMenor/Gm.png';
import Am from '../../img/aprender/notasMenor/Am.png';
import Bm from '../../img/aprender/notasMenor/Bm.png';

function Aprender() {
  return (
    <>
      <Header />
      {/************************************* Praticas ************************************/}
      <section class="aprender">
        <h2>Agora vamos a umas pequenas praticas</h2>
        <p>
          {' '}
          Sobre a numeração das cordas do violão, o certo é contar de baixo para
          cima (a corda mais aguda é a primeira e a corda mais grave é a 6ª). A
          nota de cada corda é a seguinte:
        </p>
        <div class="sequencia">
          <img src={notas} alt="notas" />
          <ul>
            <li>1ª corda: mi</li>
            <li>2ª corda: si</li>
            <li>3ª corda: sol</li>
            <li>4ª corda: ré</li>
            <li>5ª corda: lá</li>
            <li>6ª corda: mi</li>
          </ul>
        </div>
        <h2>Agora vamos para as notas básicas</h2>
        <h3 style={{ textAlign: 'center' }}>Arcordes maiores</h3>
        <article id="notas">
          <img src={C} alt="Do" />
          <img src={D} alt="Re" />
          <img src={E} alt="Mi" />
          <img src={F} alt="Fa" />
          <img src={G} alt="Sol" />
          <img src={A} alt="La" />
          <img src={B} alt="Si" />
        </article>

        <br />
        <br />
        <br />
        <br />

        <h3 style={{ textAlign: 'center' }}>Arcordes menores</h3>
        <article id="notas">
          <img src={Cm} alt="Do menor" />
          <img src={Dm} alt="Re menor" />
          <img src={Em} alt="Mi menor" />
          <img src={Fm} alt="Fa menor" />
          <img src={Gm} alt="Sol menor" />
          <img src={Am} alt="La menor" />
          <img src={Bm} alt="Si menor" />
        </article>
      </section>
      {/******************************************** Footer ******************************************/}
      <footer class="midia">
        <p style={{ color: '#000', textAlign: 'center' }}>
          {' '}
          Copyright - StartSom | Todos os direitos reservados | Desenvolvido por
          Davi Morais
        </p>
      </footer>
    </>
  );
}

export default Aprender;

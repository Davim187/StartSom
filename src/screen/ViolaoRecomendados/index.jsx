import React from 'react';
import Header from '../../componentes/header';

import './style.css';

function Recomendados() {
  return (
    <>
      <Header />
      <div class="planos">
        <h2 class="h4"> Recomendaçoes:</h2>
        <article id="article">
          <div class="card">
            <img class="image_container" src="/Imagens/R (3).jfif" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src="/Imagens/R (2).jfif" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src="/Imagens//OIP (1).jfif" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>

          <div class="card">
            <img class="image_container" src="/Imagens/R (1).jfif" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src="/Imagens/OIP.jfif" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>

          <div class="card">
            <img class="image_container" src="/Imagens/download.jpeg" alt="" />
            <div class="text_back">
              <h1>Lorem ipsum</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                nunc vel lectus commodo aliquet ac vel velit.
                <br /> <br />
                Vivamus cursus a nunc vitae blandit. Duis quam justo, sagittis a
                fringilla quis, facilisis eu mauris.
              </p>
            </div>
          </div>
        </article>
      </div>
      {/* <!-------------------------------------------------Footer-------------------------------------------------> */}
      <footer class="midia">
        <p>
          {' '}
          Copyright - StartSom | Todos os direitos reservados | Desenvolvido por
          Davi Morais
        </p>
      </footer>
    </>
  );
}

export default Recomendados;

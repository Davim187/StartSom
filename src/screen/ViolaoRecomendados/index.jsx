import React, { useEffect } from 'react';
import Header from '../../componentes/header';

import CPX700 from '../../img/recomendados/CPX700 – Yamaha.jpg';
import MD18 from '../../img/recomendados/4370370965_1.jpg';
import NF14 from '../../img/recomendados/eb696fd61b.jpg';
import Ac39 from '../../img/recomendados/f96fa7e9242c79dd64db7355bea269f6.jpg';
import RX201 from '../../img/recomendados/8851296610681f5f39.jpg';

import './style.css';

function Recomendados() {
  // useEffect(() => {
  //   if (!localStorage.getItem('User')) {
  //     window.location.href = '/';
  //   }
  // });
  return (
    <>
      <Header />
      <div class="planos">
        <h2 class="h4"> Recomendaçoes:</h2>
        <article id="article">
          <div class="card">
            <img class="image_container" src={CPX700} alt="CPX700" />
            <div class="text_back">
              <h1>CPX700 – Yamaha</h1>
              <p>
                Os violões da série 700 distinguem-se pelo seu estilo e
                características que foram trazidas dos violões da série 1000,
                mas apresentam um sistema de amplificação ART exclusivo.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src={MD18} alt="MD18" />
            <div class="text_back">
              <h1>Memphis MD18 – Tagima</h1>

              <p>
                O Memphis MD18 é um violão folk elétrico de excelente relação
                custo x benefício. Este instrumento é quase todo fabricado em
                lindan que é uma madeira de baixo custo mas com ótima
                sonoridade.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src={NF14} alt="NF14" />
            <div class="text_back">
              <h1>NF14 – Giannini</h1>

              <p>
                Violão Eletroacústico Giannini Start Flat Cutaway Nylon NF-14
                Preto O Violão Elétrico Giannini Start NF-14 é um instrumento
                com belíssimo visual e ótimo custo benefício, ideal para
                estudantes e músicos iniciantes.
              </p>
            </div>
          </div>

          <div class="card">
            <img class="image_container" src={Ac39} alt="Ac39" />
            <div class="text_back">
              <h1>AC39 Tagima Memphis </h1>

              <p>
                Um ótimo violão para quem irá começar a tocar suas primeiras
                notas. Violão com cordas de nylon que proporcionam mais conforto
                para os iniciantes. Com certeza o melhor violão custo benefício
                do mercado
              </p>
            </div>
          </div>
          <div class="card">
            <img class="image_container" src={RX201} alt="RX201" />
            <div class="text_back">
              <h1>Rx201 - Rozini</h1>

              <p>
                O Rozini RX201 , construido com tampo de Marfim Laminado,
                laterais e fundo de Imbuia Laminada e braço em Cedro com escala
                de Purple Heart. Essa seleção de materiais unidos a uma boa
                construção, proporcionam ao instrumento um timbre versátil , o
                que torna a escolha perfeita para seus estudos!
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

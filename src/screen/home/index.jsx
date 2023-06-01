import React from 'react';
import Header from '../../componentes/header';
import './style.css';
/******************************************* Img *******************************************/
import acustico from '../../img/home/Acustico.png';
import semiAcustico from '../../img/home/Semi-acustico.png';
import eletroacustico from '../../img/home/eletroacustico.png';
import eletrico from '../../img/home/eletrico.png';

function Home() {
  return (
    <div>
      {/******************************************* Header *******************************************/}
      <Header />
      {/******************************************* Esplicação *******************************************/}
      <div class="esplicacoes">
        <h2>Tipos de violões:</h2>
        <div class="violao-acustico">
          <h3>Violão Acústico</h3>
          <img src={acustico} alt="Arcustico" />
          <p>
            {' '}
            Esse é o mais conhecido e o mais usado. Tradicionalíssimo nas rodas
            de luau e shows acústicos. Trata-se de um tipo de violão com seis
            cordas que, na maioria das vezes, são feitas de nylon. O Violão
            Acústico é recomendado para quem está aprendendo a tocar o
            instrumento ou para quem gosta de MPB, Samba ou Bossa Nova. A
            sonoridade desse violão vem de sua boca, em consequência da acústica
            do toque das cordas e o seu efeito vindo lá de dentro. Ele não
            possui qualquer tipo de cabo para captar o seu som, apenas o
            microfone posicionado em sua frente, caso esteja em uma apresentação
            ao vivo.
          </p>
        </div>
        <hr />
        <br />
        <div class="violao-semi-acustico">
          <h3>Violão Semi acústico</h3>
          <img src={semiAcustico} alt="" />
          <p>
            O Violão Semi Acústico não possui a tradicional boca, como o do
            anterior. Sua cavidade é menor, tratando-se apenas de fendas. Por
            isso mesmo, seu som é mais baixo que o do anterior, porém maior que
            o dos elétricos. Há, portanto, espaços para se acoplar cabos,
            diferente do anterior, em que a captação é feita por microfones.
          </p>
        </div>
        <hr />
        <br />
        <div class="violao-eletroacustico">
          <img src={eletroacustico} alt="eletroacustico" />
          <h3>Violão Eletroacústico</h3>
          <p>
            Essa é uma versão híbrida entre dois tipos de violão, como o próprio
            nome já denuncia. Seu corpo de ressonância é pleno, com captador e
            equalizador. Sendo assim, o Violão Eletroacústico possibilita tanto
            captação quanto a equalização no próprio violão, tornando-se
            maleável para o tipo de apresentação.
          </p>
        </div>
        <hr />
        <br />
        <div class="violao-eletrico">
          <img src={eletrico} alt="eletrico" />
          <h3>Violão Elétrico</h3>
          <p>
            Bem ao contrário do tipo acústico, os modelos de violão elétrico
            (também conhecidos como Flat, ou semi-sólido, ou sólido) foram
            pensados para serem usados em caixas amplificadoras. Se você sempre
            tem acesso a um amplificador ou precisa de um instrumento que possa
            ter seu som amplificado facilmente, esse tipo de violão é o
            adequado.
          </p>
        </div>
      </div>
      {/******************************************** Footer ********************************************/}
      <footer class="midia">
        <p style={{ color: '#000', textAlign: 'center' }}>
          {' '}
          Copyright - StartSom | Todos os direitos reservados | Desenvolvido por
          Davi Morais
        </p>
      </footer>
    </div>
  );
}

export default Home;

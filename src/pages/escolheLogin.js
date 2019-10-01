import React, { useEffect} from 'react'
import logo from '../assets/logoGet.svg'
import comerci from '../assets/comercial.png'
import pesso from '../assets/pesoal.png'
import log from '../assets/Icone/favicon (1).ico'
import './Escolhe.css'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

export default function Login({ history }) {


     function componentDidMount() {
        window.onscroll = () => handleScroll()
      }   
  
      function handleScroll(){
        if (document.documentElement.scrollTop  + document.querySelector('#root') >= document.documentElement.scrollHeight) {
            console.log('final')
          } 
      }

    return (
    <body>
        <center><nav> <div className="inicio"><img src={log} alt="tindev" className="logoo" /><img src={logo} alt="tindev" className="logo" /></div></nav></center>
            <center>
                <div id="carousel">
                    <div id="itens">
                        <img scr={pesso} id="left" alt=""/>
                        <ul>
                            <li><div class="item"><img src={slide1} alt="slide1"/></div></li>
                            <li><div class="item"><img src={slide2} alt="slide2"/></div></li>
                            <li><div class="item"><img src={slide3} alt="slide3"/></div></li>
                        </ul>
                        <img scr={pesso} id="next" alt=""/>
                    </div>
                </div>
            </center>
        <div className="container">
           
            <div className="expla texto ">
                <div>
                    <h1>Quem somos?</h1>
                </div><br />
                <div>
                    <p>O getJob() é uma ampla plataforma que tem o objetivo de facilitar a vida de quem esta a procura de um emprego ou estagios
                        e para a divulgação dessas vagas.
                    </p><br />
                    <p>Tendo assim dois tipos de contas!</p>
                </div>
            </div>
            <div className=" expla container">
            </div>
            <div className='collum'>
                <div class=" texto">
                    <br />
                    <h2>Conta Pessoal</h2>
                    <a className="efeito" href="logindev"><img src={pesso} alt="logo" width="200px" /></a>
                    <h3>Conta voltada para pessoas em busca de empregos ou estagios!</h3>
                </div>
                <div class=" texto">
                    <br />
                    <h2>Conta Comercial</h2>
                    <a className="efeito" href="loginemp">
                        <img src={comerci} alt="logo" width="200px" />
                    </a>
                    <h3>Conta voltada para empresas que dejesam divulgar suas vagas!</h3>
                </div>
            </div><br/><br/><br/>
            <div className="rodape">
               <center> Luís-Açucena-Luan getJob() 2019</center>
            </div>
            <script src='./acoes.js' />
            <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
        </div>
    </body>
    );
}



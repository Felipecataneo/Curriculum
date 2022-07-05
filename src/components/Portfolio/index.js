import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'u', 'r', 'r', 'í', 'c', 'u', 'l', 'o']}
              idx={15}
            />
          </h1>
          <h2>Formação</h2>
          <ul>
            <li>
              <div class="date">2005 - 2010</div>
              <div class="info">
                <p class="semi-bold">Engenharia Mecânica (UNESP)</p>
              </div>
            </li>
            <li>
              <div class="date">2013 - 2014</div>
              <div class="info">
                <p class="semi-bold">
                  Pós Graduação em Engenheira de Equipamentos (UCP)
                </p>
              </div>
            </li>
            <li>
              <div class="date">2017 - 2019</div>
              <div class="info">
                <p class="semi-bold">MBA em Gerenciamento de Projetos (FGV)</p>
              </div>
            </li>
          </ul>
          <h2>Experiência</h2>
          <ul>
            <li>
              <div class="date">Abril de 2013 - Atualmente</div>
              <div class="info">
                <p class="semi-bold">Engenheiro Pleno (Halliburton)</p>
              </div>
            </li>
            <li>
              <div class="date">Fevereiro de 2012 - Abril de 2013</div>
              <div class="info">
                <p class="semi-bold">
                  Analista de Manutenção de Aeronaves (Líder Aviação)
                </p>
              </div>
            </li>
            <li>
              <div class="date">Fevereiro de 2011 - Outubro 2011</div>
              <div class="info">
                <p class="semi-bold">
                  Trainee (Medabil Sistemas Construtivos SA)
                </p>
              </div>
            </li>
          </ul>
          <br></br>
          <h2>
            <a
              href="https://www.linkedin.com/in/felipe-biava-cataneo-b66a7625"
              target="_blank"
              rel="noreferrer"
            >
              Saiba mais sobre minha experiência acessando meu Linkedin {''}
              <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
            </a>
          </h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
